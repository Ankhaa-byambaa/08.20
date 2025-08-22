"use client";
import { useState } from "react";
// import { Task } from "/@components";
const StatePage = () => {
  const [todos, setTodos] = useState();
  return (
    <>
      {/* <Task ></Task> */}
      <div>
        {todos}
        <button onClick={() => setTodos(todos + 1)}>add count</button>
      </div>
    </>
  );
};
export default StatePage;
