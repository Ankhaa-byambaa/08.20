"use client";
import { useState } from "react";
import { Button, ButtonBlue, Task, Total } from "@/components";
const StatePage = () => {
  const [todos, setTodos] = useState([]);
  // input iin value-g hadgalah
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (a) => {
    setInputValue(a.target.value);
  };
  const OnClick = () => {
    setTodos([...todos, { tittle: inputValue, isDone: true }]);
    setInputValue("");
  };
  console.log(inputValue);
  return (
    <>
      <div className="flex justify-center pt-15 bg-black w-full h-screen">
        <div className="bg-white w-[377px] h-auto rounded-md flex flex-col gap-10 py-6 px-4">
          <p className="text-black font-bold text-[20px] flex justify-center items-center mb-[20px] gochihHandRegular ">
            To-Do list
          </p>
          <div className="mb-[20px] flex gap-[6px]">
            <input
              value={inputValue}
              type="text"
              onChange={handleOnChange}
              placeholder="Add a new task..."
              className="border-[1px] border-neutral-200 rounded-[6px] w-[280px] h-[40px]  text-black flex justify-center p-3"
            ></input>
            <ButtonBlue blue="Add" click={OnClick}></ButtonBlue>
          </div>
          <Task isDone={setTodos.isDone} valeu={inputValue}></Task>
        </div>
      </div>
    </>
  );
};
export default StatePage;
