import React from "react";

const TestApi = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  let [count, setCount] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <h1>COUNT: {count}</h1>
      <button
        className="bg-blue-500 py-1 px-4 rounded-md text-white"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default TestApi;
