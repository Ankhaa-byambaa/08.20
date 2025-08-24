import { Button, ButtonBlue, Task, Total } from "@/components";
const Todo = () => {
  const task = {
    isCompleted: false,
  };
  return (
    <>
      <div className=" flex justify-center pt-15 bg-blue-300 w-full h-screen">
        <div className="bg-white w-[377px] h-[290px] rounded-[6px] flex flex-col gap-10 pt-6 pb-6 pl-4 pr-4 ">
          <div>
            <p className="text-black font-bold text-[20px] flex justify-center items-center mb-[20px] gochihHandRegular ">
              To-Do list
            </p>
            <div className="mb-[20px] flex gap-[6px]">
              <input
                // id="input"s
                placeholder="Add a new task..."
                className="border-[1px] border-neutral-200 rounded-[6px] w-[280px] h-[40px]  text-black flex justify-center p-3"
              ></input>
              <ButtonBlue blue="Add"></ButtonBlue>
            </div>
            <div className="flex flex-nowrap gap-[6px] mb-[32px]">
              <button className="bg-blue-400 border-[1px] rounded-[6px] text-[3 text-white pl-3 pr-3 pt-1 pb-1 w-auto h-[40px] font-inter">
                All
              </button>
              <Button name="Active"></Button>
              <Button name="Completed"></Button>
            </div>

            <p className="text-[14px] text-gray-500 flex justify-center mb-6 ">
              No tasks yet. Add one above!
            </p>
            <div className="text-[12px] flex justify-center  gap-[4px] ">
              <p className=" text-gray-500">Powered by</p>
              <a href="#" className="text-blue-400">
                Pinecone Academy
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className=" flex flex-col gap-[40px] justify-center pl-10 ">
          {/* task check */}
          <Task isCompleted={task.isCompleted}></Task>
          <Total></Total>
        </div>
      </div>
    </>
  );
};
export default Todo;
