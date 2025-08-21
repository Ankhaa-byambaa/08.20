export const Total = (prop) => {
  return (
    <>
      <div className="bg-white w-[345px] h-[62px] p-[16px] rounded-md flex felx-nowrap justify-between items-center">
        <p className="text-[14px] text-gray-500 ">
          {prop.completed}_ of {prop.total} _tasks completed
        </p>
        <button className="w-auto h-auto border-transparent bg-transparent text-rose-400 ">
          Clear completed
        </button>
      </div>
    </>
  );
};
