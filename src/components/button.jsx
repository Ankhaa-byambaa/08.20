export const Button = ({ filterStatus, name, onclick }) => {
  return (
    <>
      <button
        onClick={onclick}
        className={
          "text-[#363636] border-[1px] border-zinc-300 rounded-[6px] text-[3 bg-[#F3F4F6] pl-3 pr-3 pt-1 pb-1 w-auto h-[40px] font-inter " +
          `${filterStatus === name ? " !bg-[#3C82F6] text-[#FFFFFF]" : ""}`
        }
      >
        {name}
      </button>
    </>
  );
};
