import React, { memo } from "react";
import "./style.css";
import { Title } from "../Title/Title";
import { calTemp, checkWeather } from "../../utils/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TodayForecast = memo(({ data, currentDate }: any) => {
  return (
    <div className="flex flex-col w-full">
      <Title text={`TODAY'S FORECAST`} />
      <div className="grid grid-cols-4 gap-4 justify-center items-center">
        {data &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item: any) => {
            const tempC = calTemp(item?.main?.temp);
            const dtDate = new Date(item?.dt_txt);
            const img = checkWeather(item.weather[0].main);

            if (currentDate < dtDate) {
              return (
                <React.Fragment key={item?.dt}>
                  <div className=" text-center bg-custom py-2 rounded mr-1.5 flex flex-col items-center">
                    <h4 className="text-[14px] color-text">
                      {item?.dt_txt?.slice(11, 16)}
                    </h4>
                    <img loading="lazy" className="w-[36px]" src={img} alt="" />
                    <h3 className="font-semibold text-[17px]">
                      {`${tempC} °C`}{" "}
                    </h3>
                  </div>
                </React.Fragment>
              );
            }
          })}
      </div>
    </div>
  );
});

TodayForecast.displayName = "";

export default TodayForecast;
