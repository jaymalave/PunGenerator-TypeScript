import React from "react";
import actualJokeType from "../types/jokeType";

const fetchJoke = async () => {
  const result = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      "x-rapidapi-key": YOUR_API_KEY,
    },
  });

  const joke = await result.json();

  console.log(joke);
  console.log(joke.body[0].setup);

  const actualJoke: actualJokeType = {
    setup: joke.body[0].setup,
    punchline: joke.body[0].punchline,
  };
  return actualJoke;
};

export default fetchJoke;
