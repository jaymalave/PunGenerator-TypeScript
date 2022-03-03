import React from "react";
import actualJokeType from "../types/jokeType";
import "../App.css";
import { ClipLoader } from "react-spinners";

interface JokeDisplayProps {
  joke: actualJokeType;
  isLoading: boolean;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({
  joke,
  isLoading,
}): JSX.Element => {
  return isLoading ? (
    <div className="loading-card">
      <ClipLoader loading={isLoading} size={100} />
    </div>
  ) : (
    <div className="joke-card">
      <div>
        <h1>{joke.setup || "joke"}</h1>
      </div>
      <div>
        <h1>{joke.punchline || "punchline"}</h1>
      </div>
    </div>
  );
};

export default JokeDisplay;
