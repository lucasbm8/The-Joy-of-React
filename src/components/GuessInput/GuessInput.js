import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    if (guess.length !== 5) {
      alert("Guess must be 5 characters long.");
      return;
    }
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        label="Enter guess:"
        id="guess-input"
        value={guess}
        type="text"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;