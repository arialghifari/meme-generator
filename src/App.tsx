import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";

const App = () => {
  const [show, setShow] = React.useState(true);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
};

export default App;
