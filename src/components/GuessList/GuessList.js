import React from "react";

function GuessList({ guesses }) {
  return (
    <div>
      {guesses.map((guess, index) => (
        <div key={index} className="guess">
          {guess}
        </div>
      ))}
    </div>
  );
}

export default GuessList;
