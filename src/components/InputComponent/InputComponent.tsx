import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./input.css";
import Dropbar from "../Dropbar/Dropbar";
import useClickOutSide from "../../useClickOutSide";
const InputComponent = () => {
  const [openDropBar, setOpenDropBar] = React.useState(false);
  const [valueInput, setValueInput] = React.useState("");
  const handleOpenDropBar = () => {
    setOpenDropBar(!openDropBar);
  };
  const dropdownContainerRef = React.useRef(null);
  // useClickOutSide(dropdownContainerRef, () => {
  //   setOpenDropBar(false);
  // });

  const handleClick = (item: string) => {
    setValueInput(item);
  };

  return (
    <>
      <div
        ref={dropdownContainerRef}
        className="mt-4 block focus-custom w-full bg-white rounded-md border-0 py-1 pl-3 pr-2  flex justify-between items-center relative "
        onClick={handleOpenDropBar}
      >
        <input
          className="text-gray-900 placeholder:text-gray-400 w-full  focus:outline-none text-[18px] cursor-default "
          type="text"
          placeholder="Search for cities..."
          value={valueInput}
        />
        <span className="text-slate-600 border-l p-3 cursor-pointer ">
          <FaChevronDown></FaChevronDown>
        </span>
      </div>
      {openDropBar && <Dropbar handleClick={handleClick}></Dropbar>}
    </>
  );
};

export default InputComponent;
