import React from "react";

const Dropbar = ({ handleClick }: any) => {
  const data = ["London", "Ha Noise", "đá"];
  return (
    <div className="container relative w-full z-50">
      <ul className="w-full border-1 bg-white mt-2 rounded text-black absolute ">
        {data.map((item) => {
          return (
            <li className="py-2 text-left pl-4 hover:bg-sky-200" key={item}>
              <button onClick={handleClick(item)}>{item}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropbar;
