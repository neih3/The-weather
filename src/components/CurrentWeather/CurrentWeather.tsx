import React, { memo } from "react";
import "./style.css";
import { Title } from "../Title/Title";
import { calTemp, checkWeather, getFormattedDate } from "../../utils/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CurrentWeather = memo(({ data }: any) => {
  const img = checkWeather(data?.weather[0].main);
  const tempC = calTemp(data?.main?.temp);

  const formattedDate = getFormattedDate();

  return (
    <div className="flex flex-col w-full">
      <Title text="Current Weather" />
      <div className="flex items-center">
        <div className="w-1/3 text-center">
          <h3 className="font-semibold sm:text-[20px] text-[15px]">
            {`${data?.name}, ${data?.sys?.country}`}
          </h3>
          <h4 className="sm:text-[14px] text-[10px] color-text">
            {formattedDate}
          </h4>
        </div>
        <div className="w-1/3 text-center">
          <h3 className="font-semibold text-[20px]">{`${tempC} °C`}</h3>
          <h4 className="color-text text-[14px]">
            {data?.weather[0]?.description}
          </h4>
        </div>
        <div className="w-1/3 text-center flex justify-center">
          <img
            loading="lazy"
            className="sm:w-[60px] w-[40px]"
            src={img}
            alt={data?.weather[0]?.description || "Weather icon"}
          />
        </div>
      </div>
    </div>
  );
});

CurrentWeather.displayName = "CurrentWeather";

export default CurrentWeather;
