"use client";

import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    console.log("add todo", todos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };

  return (
    <div
      className=" flex
      justify-center
      h-auto
      w-auto"
    >
      <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="type here ...."
          className="w-[100px] h-[20px] bg-gray-300 text-black"
        />
        <button
          onClick={handleAddTodo}
          className="bg-[#3C82F6] w-30 h-6 text-black rounded-md "
        >
          Add
        </button>

        {todos.map((todo, index) => (
          <div key={index} className="text-black">
            {todo}{" "}
            <button
              className="w-auto h-auto py-4 px-3 text-red-400"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
