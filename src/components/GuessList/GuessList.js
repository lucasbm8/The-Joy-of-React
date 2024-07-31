import React from "react";

import Guess from "../Guess/Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-list">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
