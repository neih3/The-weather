type CallBackFuntion = () => void;

interface WeatherDetailType {
  icon: JSX.Element;
  value: number;
  unit: string;
}

interface WeatherIconType {
  img: string | undefined;
  description: string;
}

interface ConditionItemType {
  icon: JSX.Element;
  label: string;
  value: string;
}

interface DropbarProps {
  data: any;
  handleClick: (item: string) => void;
  setOpenDropBar: (open: boolean) => void;
  setValueInput: (value: string) => void;
  valueInput: string;
  typing: boolean;
}

export {
  CallBackFuntion,
  WeatherDetailType,
  WeatherIconType,
  ConditionItemType,
  DropbarProps,
};
