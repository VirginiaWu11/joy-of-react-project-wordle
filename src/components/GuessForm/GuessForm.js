//@ts-check
import React from "react";

function GuessForm({ addToGuessList, gameStatus }) {
  const [guess, setGuess] = React.useState("");
  function onSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      alert("must have 5 characters");
    }
    addToGuessList(guess);
    setGuess("");
  }

  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
      <label htmlFor={"guess-input"}>Enter Guess</label>
      <input
        required
        disabled={gameStatus !== "ongoing"}
        id="guess-input"
        name="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        title="5 letter word"
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessForm;
