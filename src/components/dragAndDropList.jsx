"use client";
import { useState } from "react";
export const DragAndDropList = () => {
  const initialItems = ["item1", "item2", "item3"];
  const [dropediItem, setDropedItem] = useState("");
  function DragDropList() {
    return;
  }
  return (
    <>
      <div className="flex justify-center ">
        <div className=" bg-white w-[200px] h-auto  rounded-md flex justify-center flex-col gap-[20px] p-[20px]">
          {initialItems.map((item, index) => {
            return (
              <p key={index} className="text-black">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};
