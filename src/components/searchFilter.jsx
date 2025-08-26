"use client";
import { useState } from "react";
export const SearchFilter = () => {
  const arr = [
    "apple",
    "banana",
    "car",
    "Date",
    "Carrot",
    "eggplant",
    "flag",
    "pig",
  ];

  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const filteredData = arr.filter((el) => el.includes(inputValue));

  return (
    <>
      <div>
        <div className="flex justify-center ">
          <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
            <input
              type="text"
              onChange={handleOnChange}
              value={inputValue}
              className="w-[100px] h-[20px] bg-gray-300 text-black"
            />

            <ul className=" text-black" onChange={handleOnChange}>
              {filteredData.map((el, index) => {
                return (
                  <li
                    className="text-black
                  "
                    value={el}
                    key={index}
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
