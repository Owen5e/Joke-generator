import React, { useState } from "react";
import Button from "./components/Button";
import { Text } from "./index";

const Joke = () => {
  const [Joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/programming?type=single") // Fetching the joke from the API
      .then((res) => res.json())
      .then((data) => setJoke(data.joke)); // Setting the joke to the state
  };

  return (
    <div className="relative flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className=" text-4xl text-white ">Joke Generator</h1>
      <Button callApi={fetchApi} />
      <p className="text-white text-[10px] text-center">{Text}</p>
      <p className="text-white md:w-[50%] text-center break-words sm:mx-1">
        {Joke}
      </p>
    </div>
  );
};

export default Joke;
