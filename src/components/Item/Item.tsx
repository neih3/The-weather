import React from "react";
import "./style.css";
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { checkWeather, getDay } from "../../utils/utils";
import { WeatherDetailType, WeatherIconType } from "../../types/type";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Item = ({ data }: any) => {
  const calTemp = (tmp: number) => {
    return Math.floor(tmp - 273.15);
  };

  const realFeel = calTemp(data?.main?.temp);
  const img = checkWeather(data.weather[0].main);

  return (
    <div className="grid px-8 bg_custom pt-2 rounded-lg pb-2 text-sm items-start mb-2 grid-cols-3 justify-between">
      <div className="flex  items-start flex-col">
        <h1 className="font-semibold mb-3 lg:text-[17px]">{getDay(data.dt)}</h1>
        <WeatherIcon img={img} description={data?.weather[0]?.description} />
      </div>
      <div className="flex justify-evenly items-center flex-col">
        <WeatherDetail
          icon={<CiTempHigh className="mr-1" />}
          value={realFeel}
          unit="°C"
        />
        <WeatherDetail
          icon={<CiCloudOn className="mr-1" />}
          value={data?.clouds.all}
          unit="%"
        />
      </div>
      <div className="flex justify-evenly items-center flex-col ">
        <WeatherDetail
          icon={<FaWind className="mr-1" />}
          value={data?.wind.speed}
          unit="m/s"
        />
        <WeatherDetail
          icon={<WiHumidity className="mr-1" />}
          value={data?.main.humidity}
          unit="%"
        />
      </div>
    </div>
  );
};

const WeatherDetail = ({ icon, value, unit }: WeatherDetailType) => {
  return (
    <div className="flex items-center mb-3">
      {icon}
      <span className="font-semibold text-[13px] lg:text-[16px]">{`${value} ${unit}`}</span>
    </div>
  );
};

const WeatherIcon = ({ img, description }: WeatherIconType) => {
  return (
    <div className="flex items-center ">
      <img
        loading="lazy"
        className="w-[22px] mr-1 lg:w-[27px]"
        src={img}
        alt={description}
      />
      <span className="text-[14px]">{description}</span>
    </div>
  );
};

export default Item;
