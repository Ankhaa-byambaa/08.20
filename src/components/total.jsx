export const Total = ({ completed, total }) => {
  return (
    <>
      <div className="bg-white w-[355px] h-auto flex flex-col justify-center">
        <div className=" w-[345px] border-b-[1px]    border-zinc-300 pt-1 "></div>
        <div className=" p-[16px] rounded-md flex felx-nowrap justify-between items-center">
          <p className="text-[14px] text-gray-500 ">
            {completed}_ of {total} _tasks completed
          </p>
          <button className="w-auto h-auto border-transparent bg-transparent text-rose-400 ">
            Clear completed
          </button>
        </div>
      </div>
    </>
  );
};
