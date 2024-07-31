import React from "react";

import Guess from "../Guess/Guess";

function GuessList({ guesses }) {
  return (
    <div className="guess-list">
      {guesses.map((guess, index) => (
        <Guess key={index} value={guess} />
      ))}
    </div>
  );
}

export default GuessList;
