import React, { lazy, useState } from "react";

import "./input.css";
import { FaChevronDown } from "react-icons/fa";
import useClickOutSide from "../../hooks/useClickOutSide";
import { getNameCity } from "../../features/api/api";
import { useDebounce } from "../../hooks/useDebounce";

const Dropbar = lazy(() => import("../Dropbar/Dropbar"));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputComponent = ({ handleClick }: any) => {
  const [openDropBar, setOpenDropBar] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const [nameCity, setNameCity] = useState<string>("");

  const dropdownContainerRef = React.useRef<HTMLDivElement | null>(null);
  useClickOutSide(dropdownContainerRef, () => {
    setOpenDropBar(false);
  });

  const fetchName = async (value: string) => {
    const result = await getNameCity(value);
    return result;
  };

  const debouncedSearch = useDebounce(async () => {
    const nameCity = await fetchName(valueInput);
    setTyping(false);
    setNameCity(nameCity);
    setOpenDropBar(true);
  }, 650);

  return (
    <div ref={dropdownContainerRef} className="cursor-text">
      <div
        className="mt-4  focus-custom w-full bg-white rounded-md border-0 py-1 pl-3 pr-2  flex justify-between items-center relative "
        // onClick={handleOpenDropBar}
      >
        <input
          className="text-gray-900 placeholder:text-gray-400 w-full  focus:outline-none text-[18px] cursor-default "
          type="text"
          placeholder="Search for cities..."
          onChange={async (e) => {
            setOpenDropBar(true);
            setTyping(true);
            setValueInput(e.currentTarget.value);
            await debouncedSearch();
          }}
          value={valueInput}
        />
        <span className="text-slate-600 border-l p-3 cursor-pointer ">
          <FaChevronDown></FaChevronDown>
        </span>
      </div>
      {openDropBar && (
        <React.Suspense fallback={<div>loading...</div>}>
          <Dropbar
            handleClick={handleClick}
            setOpenDropBar={setOpenDropBar}
            setValueInput={setValueInput}
            valueInput={valueInput}
            data={nameCity}
            typing={typing}
          ></Dropbar>
        </React.Suspense>
      )}
    </div>
  );
};

export default InputComponent;
