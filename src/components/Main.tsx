import React from "react";
import memesData from "../memesData";

const Main = () => {
  const [memeImage, setMemeImage] = React.useState("src/assets/meme.png");

  const getMemeImage = (): void => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    return setMemeImage(url);
  };

  return (
    <main className="flex flex-col justify-center items-center my-10 px-4">
      <div className="form flex flex-row justify-center gap-4 sm:flex-col w-full">
        <input
          type="text"
          placeholder="Top text"
          className="setup rounded-[4px] border-[1px] border-[#B0B0B0] py-2 indent-2 min-w-[230px]"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="punchline rounded-[4px] border-[1px] border-[#B0B0B0] py-2 indent-2 min-w-[230px]"
        />
      </div>
      <div className="flex flex-col items-center gap-5 mt-5 w-[477px] sm:w-full">
        <button
          className="bg-button w-full flex justify-center rounded-[4px] py-2 font-bold"
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
        <img className="rounded-[4px] bg-cover w-full" src={memeImage} alt="" />
      </div>
    </main>
  );
};

export default Main;
