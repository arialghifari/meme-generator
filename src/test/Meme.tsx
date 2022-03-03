import React from "react";

interface Props {
  setup: string | undefined;
  punchline: string | undefined;
}

const Meme = (props: Props) => {
  const [isShown, setIsShown] = React.useState(false);

  const togglePunchline = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <div className="meme p-4 border-b-2 gap-2 text-xl font-semibold w-3/12 mx-auto">
      {props.setup && <h3 className="font-light">Setup: {props.setup}</h3>}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button
        className="text-white py-1 px-3 rounded-md text-lg bg-blue-500"
        onClick={togglePunchline}
      >
        {isShown ? "Hide" : "Show"} Punchline!
      </button>
    </div>
  );
};

export default Meme;
