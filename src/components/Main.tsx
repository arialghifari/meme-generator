import memeImg from "../assets/meme.png";
import memesData from "../memesData";

const getMemeImage = (): void => {
  const memesArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  const url = memesArray[randomNumber].url;

  console.log(url);
};

const Main = () => { 
  return (
    <>
      <div className="form flex justify-center gap-4 mt-10">
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
      <main className="flex justify-center mt-5">
        <div className="flex flex-col gap-10 w-[477px]">
          <img className="w-full rounded-[4px]" src={memeImg} alt="" />
          <button
            className="bg-button w-full flex justify-center rounded-[4px] py-2 font-bold"
            onClick={getMemeImage}
          >
            Get a new meme image
          </button>
        </div>
      </main>
    </>
  );
};

export default Main;
