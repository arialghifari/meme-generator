import React from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  console.log(windowWidth);

  return (
    <div className="mt-2 text-2xl">
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};

export default WindowTracker;
