"use client";
import { Button, Total } from "@/components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const handleOnClick = () => {
    setFilterStatus();
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  let total = 0;
  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    console.log("add todo", todos);
    setIsDone(false);
    total++;
  };
  let comp = 0;
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };
  let a = <Total completed={comp} total={total}></Total>;
  let ptag = "";
  isDone ? (ptag = "No tasks yet. Add one above!") : "";
  isDone ? "" : a;
  let count;

  //   filterStatus.map(() => {
  //     if (filterStatus === "active") {
  //       count++;
  //     }
  //     return;
  //   });

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return !todo.isDone;
    return todo.isDone;
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className=" 
      bg-white w-[377px] h-auto  rounded-md pb-6 pl-4 pr-4 pt-6  flex flex-col gap-5"
      >
        <p className="text-black font-bold text-[20px] flex justify-center items-center  gochihHandRegular ">
          To-Do list
        </p>
        <div className=" flex flex-row gap-[10px]">
          <input
            onChange={handleOnChange}
            type="text"
            placeholder="add a new task ..."
            className="border-[1px] border-neutral-200 rounded-[6px] w-[280px] h-[40px]  text-black flex justify-center p-3"
          />
          <button
            onClick={handleAddTodo}
            className="bg-[#3C82F6] border-[1px] rounded-[6px] text-[3 text-white pl-3 pr-3 pt-1 pb-1 w-[59px] h-[40px] font-inter "
          >
            Add
          </button>
        </div>
        <div className="flex gap-[6px] ">
          <Button name={"all"} filterStatus={filterStatus} />
          <Button name={"active"} filterStatus={filterStatus} />
          <Button name={"completed"} filterStatus={filterStatus} />
        </div>
        <p className="text-[14px] text-[#6B7280] flex justify-center  ">
          {ptag}
        </p>

        <div>
          {filteredTodos.map((todo, index) => (
            <div
              key={todo.id}
              className="bg-[#F9FAFB] w-[345px] h-[62px] flex flex-row  justify-between items-center py-4 px-4 "
            >
              <div className="flex flex-row gap-[10px]">
                <input type="checkbox" className="bg-[#0275FF] text-white" />
                <div className="text-black  flex gap-[10px] rounded-md">
                  {todo}
                </div>
              </div>

              <button
                className="bg-rose-100 w-[67px] h-[30px] py-[6px] px-3 text-[14px] text-rose-500 rounded-[6px]"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          ))}

          {/* <div>{a}</div> */}

          <div className="text-[12px] flex justify-center  gap-[4px] mt-5 ">
            <p className=" text-[#6B7280]">Powered by</p>
            <a href="https://pinecone.mn/" className="text-[#3B73ED]">
              Pinecone Academy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;
