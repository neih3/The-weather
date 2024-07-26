import React, { memo } from "react";
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { Title } from "../Title/Title";
import { calTemp } from "../../utils/utils";
import { ConditionItemType } from "../../types/type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AirConditions = memo(({ data }: any) => {
  if (!data || !data.main || !data.wind || !data.clouds) {
    return <div>No air conditions data available</div>;
  }

  const realFeel = calTemp(data.main.feels_like);

  return (
    <div className="flex flex-col w-full">
      <Title text="air conditions" />
      <div className="grid grid-cols-4">
        <ConditionItem
          icon={<CiTempHigh />}
          label="Real Feel"
          value={`${realFeel} °C`}
        />
        <ConditionItem
          icon={<FaWind />}
          label="Wind"
          value={`${data.wind.speed} m/s`}
        />
        <ConditionItem
          icon={<CiCloudOn />}
          label="Clouds"
          value={`${data.clouds.all} %`}
        />
        <ConditionItem
          icon={<WiHumidity />}
          label="Humidity"
          value={`${data.main.humidity} %`}
        />
      </div>
    </div>
  );
});

const ConditionItem = memo(({ icon, label, value }: ConditionItemType) => (
  <div className="text-center flex flex-col items-center gap-3">
    <h4 className="text-[13px] color-text flex flex-col lg:flex-row sm:flex-row items-center gap-0.5">
      <span className="text-[16px] lg:text-[20px]">{icon}</span>
      <span className="text-[12px] lg:text-[17px]">{label}</span>
    </h4>
    <h3 className="font-semibold text-[13px] lg:text-[17px]">{value}</h3>
  </div>
));

AirConditions.displayName = "AirConditions";
ConditionItem.displayName = "ConditionItem";

export default AirConditions;
