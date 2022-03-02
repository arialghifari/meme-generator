import React from "react";
import CountNumber from "./CountNumber";

const Count = () => {
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const sub = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="counter text-center my-10 flex flex-col gap-2 w-[200px] mx-auto">
      <CountNumber number={count} />
      <button className="bg-blue-400 text-white cursor-pointer" onClick={add}>
        +
      </button>
      <button className="bg-blue-400 text-white cursor-pointer" onClick={sub}>
        -
      </button>
    </div>
  );
};

export default Count;
