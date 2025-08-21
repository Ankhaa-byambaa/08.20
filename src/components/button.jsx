export const Button = (promp) => {
  return (
    <>
      <button className="text-zinc-900 border-[1px] border-zinc-300 rounded-[6px] text-[3 bg-zinc-100 pl-3 pr-3 pt-1 pb-1 w-auto h-[40px] font-inter">
        {promp.name}
      </button>
    </>
  );
};
