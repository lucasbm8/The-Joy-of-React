import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Guess from "../Guess";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />;
      <Guess />
    </>
  );
}

export default Game;
