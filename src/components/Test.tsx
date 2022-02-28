import React from "react";

const Test = () => {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  const addThings = () => {
    const nextThing = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, nextThing]);
  };

  const elThings = things.map((item) => {
    return <p key={item}>{item}</p>;
  });

  return (
    <div className="flex flex-col justify-center mt-5 p-16">
      <button
        className="bg-red-400 text-white rounded-lg p-2"
        onClick={addThings}
      >
        Add Item
      </button>
      {elThings}
    </div>
  );
};

export default Test;
