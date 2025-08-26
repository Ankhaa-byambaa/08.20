"use client";
import { useState } from "react";
export const SwitchColor = () => {
  const [backgrounColor, setBackgroundColor] = useState("");

  const handleOnChange = (e) => {
    setBackgroundColor(e.target.value);
    console.log("BgColor", backgrounColor);
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
          <select onChange={handleOnChange} className="bg-white text-black">
            <option value=""> select color</option>
            <option value="red"> Red</option>
            <option value="blue"> blue</option>
            <option value="indigo"> indigo</option>
            <option value="pink">pink</option>
            <option value="black"> black</option>
            <option value="green"> green</option>
          </select>
          <div
            className="w-[60px] h-[20px] rounded-md"
            style={{ backgroundColor: backgrounColor }}
          ></div>
        </div>
      </div>
    </>
  );
};
