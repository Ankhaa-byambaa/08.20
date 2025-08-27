export const Card = (props) => {
  return (
    <>
      <div className="bg-gray-100 border-0.5 border-gray-300 rounded-[20px] w-[400px] h-[500px]">
        <img
          src={props.Imgsrc}
          className="pt-[20px] pb-[20px]  w-[400px] h-[250px]"
        />

        <div className="w-[400px] h-[500px] flex gap-[20px] p-[20px] flex-col  ">
          <p className="text-black text-xs">{props.date}</p>
          <h3 className="text-black">{props.tittle}</h3>
          <p className="text-gray-500">{props.blog}</p>
          <button className="text-white border-0.5 border-white bg-blue-400 w-[100%] h-[30px] flex justify-center items-center rounded-[20px] ">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};
