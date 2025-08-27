import { Card, Navigation } from "@/components";
const arr = [
  {
    key: "image1",
    tittle: "The art of clean code",
    date: "January, 12, 2025",
    blog: "Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax.",
    Imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s",
  },
  {
    key: "image2",
    tittle: "The art of clean code",
    date: "January, 12, 2025",
    blog: "Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax.",
    Imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s",
  },
  {
    key: "image3",
    tittle: "The art of clean code",
    date: "January, 12, 2025",
    blog: "Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax.",
    Imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s",
  },
  {
    key: "image4",
    tittle: "The art of clean code",
    date: "January, 12, 2025",
    blog: "Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax.",
    Imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s",
  },
  {
    key: "image5",
    tittle: "The art of clean code",
    date: "January, 12, 2025",
    blog: "Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax.",
    Imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s",
  },
];

const Home = () => {
  return (
    <>
      <div className="bg-white w-[100vw] h-[1800px] p-[20px]">
        {/* navigation Bar */}
        <Navigation></Navigation>
        {/* hero */}
        <div className="flex flex-col gap-[20px] items-center justify-center">
          <br></br>
          <span className="text-black text-4xl ">Welcome to Simple blog </span>
          <br></br>
          <p className="text-gray-500 text-xl">
            Discover articles about web development, programming, and
            technology. Clean design quility content.
          </p>
          <br></br>
        </div>
        {/* section */}
        <div className="text-black text-2xl flex justify-center items-center">
          latest posts
        </div>
        <br></br>
        <br></br>
        <div className="flex felx-row flex-nowrap gap-[30px] overflow-y-scroll">
          {arr.map((arr) => {
            return (
              <Card
                // key={0}
                tittle={arr.tittle}
                Imgsrc={arr.Imgsrc}
                blog={arr.blog}
                date={arr.date}
              ></Card>
            );
          })}

          {/* <Card
            tittle="The art of clean code"
            date="January, 12, 2025"
            blog="Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax."
            Imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s"
          ></Card>
          <Card
            tittle="The art of clean code"
            date="January, 12, 2025"
            blog="Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax."
            Imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s"
          ></Card>
          <Card
            tittle="The art of clean code"
            date="January, 12, 2025"
            blog="Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax."
            Imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s"
          ></Card>
          <Card
            tittle="The art of clean code"
            date="January, 12, 2025"
            blog="Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax."
            Imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s"
          ></Card>
          <Card
            tittle="The art of clean code"
            date="January, 12, 2025"
            blog="Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax."
            Imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s"
          ></Card>
          <Card
            tittle="The art of clean code"
            date="January, 12, 2025"
            blog="Descover best practical fro writing miantainable,m readable code that your future self and teammates will tankh you for. Clean code is not just about syntax."
            Imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Oxryxnu7e_mvEWWktjKQUXR-N_6sUDfkoQ&s"
          ></Card> */}
        </div>
      </div>
    </>
  );
};
export default Home;
