export const Task = ({ isDone, valeu }) => {
  return (
    <>
      <div className="bg-zinc-100 w-[345px] h-[62px] p-[16px] rounded-md flex felx-nowrap justify-between items-center mb-10 ">
        <div className=" flex gap-[10px] ">
          {isDone ? (
            <input type="checkbox" className="w-[20px] h-[20px]"></input>
          ) : (
            <input
              type="checkbox"
              valeu="yes"
              className="w-[20px] h-[20px]outline outline-offset-[1px]"
            ></input>
          )}

          <p
            className={
              isDone
                ? "text-[14px] text-black"
                : "line-through text-[14px] text-black "
            }
          >
            {valeu}
          </p>
        </div>
        {isDone ? (
          <button className="bg-rose-100 w-[67px] h-[30px] py-[6px] px-3 text-[14px] text-rose-500 rounded-[6px] ">
            Delete
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
