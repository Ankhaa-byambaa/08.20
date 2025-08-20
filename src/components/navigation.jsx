export const Navigation = () => {
  return (
    <>
      <div
        className="flex flex-row items-center  justify-between w-[90vw]
      h-[60px] border-0.1 border-gray-400 p-20px"
      >
        <span className="text-xl text-black pl-[20px]">Simple BLog</span>
        <div className="flex gap-[20px]">
          <p className=" text-xs text-black ">Home</p>
          <p className="text-xs text-black ">About</p>
          <p className="text-xs text-black ">Contact</p>
        </div>
      </div>
    </>
  );
};
