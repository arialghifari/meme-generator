import React from "react";

const Test = () => {
  let [count, setCount] = React.useState(0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const sub = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex flex-col gap-5 justify-center mt-5 p-16 text-center">
      <h1>{count}</h1>
      <button className="bg-blue-400 text-white rounded-lg p-2" onClick={add}>
        +
      </button>
      <button className="bg-blue-400 text-white rounded-lg p-2" onClick={sub}>
        -
      </button>
    </div>
  );
};

export default Test;
