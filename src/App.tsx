import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Count from "./test/Count";
import Card from "./test/Card";
import Header from "./test/Header";
import Body from "./test/Body";
import React from "react";

function App() {
  const [user, setUser] = React.useState("Ari");

  return (
    <>
      <Navbar />
      <Main />
      <div className="text-center">
        <Header username={user} />
        <Body username={user} />
      </div>
      <Count />
      <Card />
    </>
  );
}

export default App;
