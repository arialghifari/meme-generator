import React from "react";
import memesData from "../memesData";

const Main = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImage] = React.useState(memesData.data.memes);

  const handleChangeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const memeUrl = allMemeImages[randomNumber].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeUrl,
      };
    });
  };

  const handleForm = (e: any) => {
    const { name, value } = e.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <main className="flex flex-col justify-center items-center my-10 px-4">
      <div className="form flex flex-row justify-center gap-4 w-[477px] sm:flex-col sm:w-full">
        <input
          type="text"
          placeholder="Top text"
          className="setup input"
          onChange={handleForm}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="punchline input"
          onChange={handleForm}
          name="bottomText"
          value={meme.bottomText}
        />
      </div>
      <div className="flex flex-col items-center gap-5 mt-5 w-[477px] sm:w-full">
        <button
          className="bg-button w-full flex justify-center rounded-[4px] py-2 font-bold"
          onClick={handleChangeImage}
          name="changeImage"
        >
          Get a new meme image
        </button>
        <div className="relative overflow-hidden">
          <img
            className="rounded-[4px] bg-cover w-full"
            src={meme.randomImage}
            alt=""
          />
          <p className="meme-text absolute top-0 text-white text-3xl w-full text-center p-2">
            {meme.topText}
          </p>
          <p className="meme-text absolute bottom-0 text-white text-3xl w-full text-center p-2">
            {meme.bottomText}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
