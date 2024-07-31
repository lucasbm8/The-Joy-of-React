import React from "react";

import { range } from "../../utils";

import { checkGuess } from "../../game-helpers.js";
function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  console.log({ result });

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
