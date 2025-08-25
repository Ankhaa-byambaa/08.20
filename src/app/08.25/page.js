"use client";
import { useState } from "react";
import { Todo } from "@/components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const OnChange = (a) => {
    setInputValue(a.target.value);
  };
  const [isDone, setIsDone] = useState(true);
  const OnClick = () => {
    setIsDone(!isDone);
  };

  let ptag = "";
  isDone ? (ptag = "Toggle me! ") : " ";

  //   const [inputValue2, setInputValue2] = useState("");
  //   const [todos, setTodos] = useState([]);

  //   const handleOnChange = (event) => {
  //     setInputValue2(event.target.value);
  //   };
  //   const handleAddTodo = () => {
  //     setTodos([...todos, inputValue2]);
  //     console.log("add todo", todos);
  //   };
  //   const handleDeleteTodo = (index) => {
  //     const newTodos = todos.filter((el, i) => index !== i);
  //     setTodos(newTodos);
  //   };

  return (
    <>
      <div className=" flex gap-10 flex-col py-10">
        <div className="flex justify-center ">
          <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
            <input
              onChange={OnChange}
              value={inputValue}
              className="w-[100px] h-[20px] bg-gray-300 text-black"
            />
            <p className="text-black"> Input Text :{inputValue} </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
            <button
              onClick={OnClick}
              className="w-[100px] h-auto bg-gray-300 text-black rounded-md flex justify-center py-2"
            >
              show / hide
            </button>
            <p className="text-black">{ptag} </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
            <input
              onChange={OnChange}
              value={inputValue}
              className="w-[100px] h-[20px] bg-gray-300 text-black"
            />
            <p className="text-black"> Input Text :{inputValue.length} </p>
          </div>
        </div>
        {/* <div className="flex justify-center h-auto w-auto ">
          <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
            <input
              onChange={handleOnChange}
              value={setInputValue2}
              type="text"
              className="w-[100px] h-[20px] bg-gray-300 text-black"
            />
            <button
              onClick={handleAddTodo}
              className="bg-indigo-300 w-30 h-6 text-black rounded-md "
            >
              add todo
            </button>

            {todos.map((todos, index) => {
              <p className="text-black" key={index}>
                {todos}
                <button
                  className="w-auto h-auto py-4 px-3"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </p>;
            })}
          </div>
        </div> */}
        <Todo></Todo>
      </div>
    </>
  );
};

export default Home;
