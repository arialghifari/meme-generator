import React from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const watchWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  console.log(windowWidth);

  return (
    <div className="mt-2 text-2xl">
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};

export default WindowTracker;
