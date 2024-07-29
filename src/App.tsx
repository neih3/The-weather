import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import InputComponent from "./components/InputComponent/InputComponent";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import AirConditions from "./components/AirConditions/AirConditions";
import TodayForecast from "./components/TodayForecast/TodayForecast";
import Item from "./components/Item/Item";
import { Title } from "./components/Title/Title";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { get5Day, getCity } from "./features/api/api";
import { getHour } from "./utils/utils";

const App: React.FC = React.memo(function App() {
  const currentDate = new Date();

  const queryClient = useQueryClient();

  const results = useQuery({
    queryKey: ["Data"],
    queryFn: async () => await getCity("Hanoi"),
    refetchOnWindowFocus: false, // Không refetch khi cửa sổ được focus
    refetchOnMount: false, // Không refetch khi component được mount
  });

  const getNewCity = useMutation({
    mutationFn: async (city: string) => await getCity(city),
    onSuccess: (data) => {
      queryClient.setQueryData(["Data"], data);
      if (data?.coord) {
        get5Day(data.coord.lat, data.coord.lon).then((forecastData) => {
          queryClient.setQueryData(["Data5Day"], forecastData);
        });
      }
    },
  });
  const handleClick = React.useCallback(
    (item: string) => {
      getNewCity.mutate(item);
    },
    [getNewCity]
  );

  const data = results?.data;

  const dataMemoized = React.useMemo(() => results.data, [results.data]);

  const results5Day = useQuery({
    queryKey: ["Data5Day"],
    queryFn: async () => await get5Day(data?.coord.lat, data?.coord.lon),
    enabled: !!data?.coord?.lat && !!data?.coord?.lon,
  });

  const dataEachHourMemoized = React.useMemo(() => {
    if (!results5Day?.data?.list) {
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return results5Day.data.list.filter((item: any) => getHour(item.dt_txt));
  }, [results5Day.data]);
  const data5Day = results5Day?.data?.list
    ? [
        results5Day.data.list[9],
        results5Day.data.list[17],
        results5Day.data.list[25],
        results5Day.data.list[33],
        results5Day.data.list[39],
      ]
    : [];
  // console.log(data5Day);
  return (
    <div className="App lg:container rounded-md lg:px-4 lg:pt-4 md:px-4 ">
      <HeaderComponent />
      <InputComponent handleClick={handleClick} />

      {!dataMemoized || !results5Day.data ? (
        <span>Loading...</span>
      ) : (
        <div className="App_Container mt-12 pb-6">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="flex flex-wrap gap-[2.5rem] lg:gap-6 md:gap-5">
              <CurrentWeather data={dataMemoized} />
              <AirConditions data={dataMemoized} />
              <TodayForecast
                data={dataEachHourMemoized}
                currentDate={currentDate}
              />
            </div>
            <div>
              <Title text="WEEKLY FORECAST" />
              {data5Day.map((item, index) => (
                <Item key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default App;
