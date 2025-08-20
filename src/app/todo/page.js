const Todo = () => {
  return (
    <>
      <div className="bg-white w-[377px] h-[290px] rounded-[6px] flex gap-10 pt-6 pb-6 pl-4 pr-4 ">
        <div>
          <p className="text-black font-inter text-[20px] flex justify-center items-center">
            To-Do list
          </p>
          <div>
            <input className=" bg-white"></input>
            <button>add</button>
          </div>
          <div>
            <button>All</button>
            <button>Acttive</button>
            <button>Completed</button>
          </div>
          <p>No tasks yet. Add one above!</p>
        </div>
        <div>
          Powered by <a href="#"> Pinecone Academy</a>
        </div>
      </div>
    </>
  );
};
export default Todo;
