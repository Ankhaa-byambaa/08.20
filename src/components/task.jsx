export const Task = (props) => {
  return (
    <>
      <div
        className={
          props.isCompleted
            ? "bg-white w-[345px] h-[62px] p-[16px] rounded-md flex felx-nowrap justify-between items-center "
            : "bg-zinc-100 w-[345px] h-[62px] p-[16px] rounded-md flex felx-nowrap justify-between items-center "
        }
      >
        <div className=" flex gap-[10px] ">
          {props.isCompleted ? (
            <input type="checkbox" className="w-[20px] h-[20px]"></input>
          ) : (
            <input
              type="checkbox"
              valeu="yes"
              checked
              className="w-[20px] h-[20px]"
            ></input>
          )}

          <p
            className={
              props.isCompleted
                ? "text-[14px] text-black"
                : "line-through text-[14px] text-black"
            }
          >
            two years {props.valeu}
          </p>
        </div>
        {props.isCompleted ? (
          <></>
        ) : (
          <button className="bg-rose-100 w-[67px] h-[30px] py-[6px] px-3 text-[14px] text-rose-500 rounded-[6px] ">
            Delete
          </button>
        )}
      </div>
    </>
  );
};
