import React from "react";

const TestApi = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  let [count, setCount] = React.useState(0);

  console.log("Component rendered");

  React.useEffect(() => {
    console.log("useEffect ran");

    fetch("https://swapi.dev/api/people/1/")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

  const handleAdd = () => {
    setCount((prevCount) => (prevCount += 1));
  };

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h1>COUNT: {count}</h1>
      <button
        className="bg-blue-500 px-4 rounded-md text-white"
        onClick={handleAdd}
      >
        +1
      </button>
    </div>
  );
};

export default TestApi;
