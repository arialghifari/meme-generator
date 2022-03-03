import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Count from "./test/Count";
import Card from "./test/Card";
import Header from "./test/Header";
import Body from "./test/Body";
import React from "react";
import boxesData from "./test/boxes";
import Box from "./test/Box";
import memesData from "./test/memesData";
import Meme from "./test/Meme";
import Messages from "./test/Messages";

function App() {
  const [user, setUser] = React.useState("Ari");

  // BOXES
  const [boxes, setBoxes] = React.useState(boxesData);

  const toggle = (id: number) => {
    setBoxes((prevBoxes): any => {
      // Method 1
      // const index = id - 1;
      // prevBoxes.splice(index, 1, { id: id, on: !prevBoxes[index].on });
      // return [...prevBoxes];

      // Method 2
      // prevBoxes.map((item) => {
      //   if (item.id === id) {
      //     item.on = !item.on;
      //   }
      // });
      // return [...prevBoxes];

      // Method 3
      // return prevBoxes.map((item) => {
      //   // Method 3.1
      //   // if (item.id === id) {
      //   //   return { ...item, on: !item.on };
      //   // }
      //   // return item;

      //   // Method 3.2
      //   // return item.id === id ? { ...item, on: !item.on } : item;
      // });

      // Method 4 (my method)
      prevBoxes[id - 1].on = !prevBoxes[id - 1].on;
      return [...prevBoxes];
    });
  };

  const boxElements = boxes.map((box) => {
    return <Box key={box.id} on={box.on} handleClick={() => toggle(box.id)} />;
  });

  // Meme (setup - punchline)
  const memeElements = memesData.map((meme) => {
    return <Meme key={meme.id} setup={meme.setup} punchline={meme.punchline} />;
  });

  return (
    <>
      <Navbar />
      <Main />
      <Messages />
      {memeElements}
      <div className="flex gap-5 justify-center my-10">{boxElements}</div>
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
