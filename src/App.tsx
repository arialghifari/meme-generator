import Navbar from "./components/Navbar";
import Main from "./components/Main";
import WindowTracker from "./components/WindowTracker";
import React from "react";

const App = () => {
  const [show, setShow] = React.useState(true);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="text-center my-5">
      <button
        onClick={toggle}
        className="py-2 px-4 bg-blue-600 text-white rounded-md"
      >
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
};

export default App;
