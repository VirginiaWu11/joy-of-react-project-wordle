//@ts-check
import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  function addToGuessList(guessText) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      alert("maximum guesses reached");
      return;
    }
    setGuessList((guessList) => [
      ...guessList,
      { id: crypto.randomUUID(), text: guessText },
    ]);
  }

  return (
    <>
      Put a game here!
      <PreviousGuesses guessList={guessList} answer={answer} />
      <GuessForm addToGuessList={addToGuessList} />
    </>
  );
}

export default Game;
