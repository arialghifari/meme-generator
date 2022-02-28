import memeImg from "../assets/meme.png";

const Main = () => {
  return (
    <>
      <form action="" method="" className="flex justify-center gap-4 mt-10">
        <input
          type="text"
          className="setup rounded-[4px] border-[1px] border-[#B0B0B0] p-2 min-w-[230px]"
        />
        <input
          type="text"
          className="punchline rounded-[4px] border-[1px] border-[#B0B0B0] p-2 min-w-[230px]"
        />
      </form>
      <main className="flex justify-center mt-5">
        <div className="flex flex-col gap-10">
          <div
            className="img flex flex-col justify-between p-4 text-center text-[32px] rounded-[4px] min-h-[268px] font-impact text-white"
            style={{ backgroundImage: `url(${memeImg})` }}
          >
            <p>SHUT UP</p>
            <p>AND TAKE MY MONEY</p>
          </div>
          <a
            href="/"
            className="bg-button w-[477px] flex justify-center rounded-[4px] py-2 font-bold"
          >
            Get a new meme image
          </a>
        </div>
      </main>
    </>
  );
};

export default Main;
