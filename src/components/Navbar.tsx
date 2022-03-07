import memeSvg from "../assets/troll.svg";

const Navbar = () => {
  return (
    <nav className="bg-nav h-[65px] flex px-10 justify-between items-center sm:justify-center">
      <a href="/" className="brand flex gap-2">
        <img src={memeSvg} alt="" />
        <h1 className="font-bold text-xl">Meme Generator</h1>
      </a>
      <div className="project sm:hidden">
        <p className="font-medium text-sm">React JS - Project</p>
      </div>
    </nav>
  );
};

export default Navbar;
