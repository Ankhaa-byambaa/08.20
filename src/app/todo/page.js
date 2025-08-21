const Todo = () => {
  return (
    <>
      <div className="flex justify-center"></div>
      <div className="bg-white w-[377px] h-[290px] rounded-[6px] flex flex-col gap-10 pt-6 pb-6 pl-4 pr-4 ">
        <div>
          <p className="text-black font-inter text-[20px] flex justify-center items-center">
            To-Do list
          </p>
          <div>
            <input className="border-[1px] border-neutral-400 rounded-[6px] w-[280px] h-[40px] "></input>
            <button>add</button>``
          </div>
          <div className="flex gap-[6px] "></div>
          <p className="text-[14px] text-gray-500 flex justify-center ">
            No tasks yet. Add one above!
          </p>
        </div>
        <div className="text-[12px] flex justify-center gap-[4px] ">
          <p className=" text-gray-500">Powered by</p>
          <a href="#" className="text-blue-400">
            {" "}
            Pinecone Academy
          </a>
        </div>
      </div>
    </>
  );
};
export default Todo;
