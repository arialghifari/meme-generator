import React, { MouseEventHandler } from "react";

interface Props {
  on: boolean;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

const Box = (props: Props) => {
  return (
    <div
      className={`w-20 h-20 cursor-pointer border rounded-md ${
        props.on ? "bg-stone-800" : ""
      }`}
      onClick={props.handleClick}
    ></div>
  );
};

export default Box;
