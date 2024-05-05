import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { Title } from "../Title/Title";
const AirConditions = () => {
  return (
    <div className="  flex flex-col w-full">
      <Title text="air conditions"></Title>
      <div className="flex justify-between">
        <div className=" text-center flex flex-col items-center gap-4">
          <h4 className="text-[16px] color-text flex items-center gap-2">
            <span className="text-[20px]">
              <CiTempHigh />
            </span>
            Real Feel
          </h4>
          <h3 className="font-semibold text-[16px]"> 13 °C</h3>
        </div>
        <div className=" text-center flex flex-col items-center gap-4">
          <h4 className="text-[16px] color-text flex items-center gap-2">
            <span className="text-[20px]">
              <FaWind />
            </span>
            Wind
          </h4>
          <h3 className="font-semibold text-[16px]"> 1.9 m/s</h3>
        </div>
        <div className=" text-center flex flex-col items-center gap-4">
          <h4 className="text-[16px] color-text flex items-center gap-2">
            <span className="text-[20px]">
              <CiCloudOn />
            </span>
            100 %
          </h4>
          <h3 className="font-semibold text-[16px]"> 13 °C</h3>
        </div>
        <div className=" text-center flex flex-col items-center gap-4">
          <h4 className="text-[16px] color-text flex items-center gap-2">
            <span className="text-[20px]">
              <WiHumidity />
            </span>
            67 %
          </h4>
          <h3 className="font-semibold text-[16px]"> 13 °C</h3>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
