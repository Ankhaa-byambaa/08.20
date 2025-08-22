export const ButtonBlue = ({ click, blue }) => {
  return (
    <>
      <button
        className={
          click
            ? "bg-blue-400 border-[1px] rounded-[6px] text-[3 text-white pl-3 pr-3 pt-1 pb-1 w-[59px] h-[40px] font-inter "
            : "bg-zinc-100 border-[1px] rounded-[6px] text-[3 text-[#363636] pl-3 pr-3 pt-1 pb-1 w-[59px] h-[40px] font-inter "
        }
      >
        {blue}
      </button>
    </>
  );
};
