import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import JokeDisplay from "./components/JokeDisplay";
import fetchJoke from "./api/fetchJoke";
import actualJokeType from "./types/jokeType";

function App() {
  // fetchJoke();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [joke, setJoke] = useState<actualJokeType>({
    setup: "",
    punchline: "",
  });

  const handleJoke = async () => {
    setIsLoading(true);
    const res: actualJokeType = await fetchJoke();
    setIsLoading(false);
    setJoke(res);
  };
  return (
    <div className="App">
      <Title />
      <Button getJoke={handleJoke} title="Get a joke" />
      <JokeDisplay joke={joke} isLoading={isLoading} />
    </div>
  );
}

export default App;
