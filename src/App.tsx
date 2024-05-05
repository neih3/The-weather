import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import InputComponent from "./components/InputComponent/InputComponent";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import AirConditions from "./components/AirConditions/AirConditions";
import TodayForecast from "./components/TodayForecast/TodayForecast";
import Item from "./components/Item/Item";
import { Title } from "./components/Title/Title";
import useClickOutSide from "./useClickOutSide";

function App() {
  return (
    <div className="App lg:container rounded-md   px-6 pt-3  ">
      <HeaderComponent />
      <InputComponent></InputComponent>
      <div className="App_Container mt-12 pb-6   ">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
          <div className="flex flex-wrap gap-[2.5rem] lg:gap-6 md:gap-5">
            <CurrentWeather></CurrentWeather>
            <AirConditions></AirConditions>
            <TodayForecast></TodayForecast>
          </div>
          <div className=" ">
            <Title text="WEEKLY FORECAST"></Title>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
