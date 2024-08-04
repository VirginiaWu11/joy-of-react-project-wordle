//@ts-check
import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState("ongoing");
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });
  function restartGame() {
    setAnswer(sample(WORDS));
    setGameStatus("ongoing");
    setGuessList([]);
  }

  function addToGuessList(guessText) {
    if (guessText === answer) {
      setGameStatus("won");
    }
    if (guessList.length > NUM_OF_GUESSES_ALLOWED) {
      alert("max reached");
      return;
    }
    if (
      guessList.length + 1 === NUM_OF_GUESSES_ALLOWED &&
      gameStatus === "ongoing"
    ) {
      setGameStatus("lost");
    }
    setGuessList((guessList) => [
      ...guessList,
      { id: crypto.randomUUID(), text: guessText },
    ]);
  }

  return (
    <>
      Put a game here!
      <Banner
        gameStatus={gameStatus}
        guessAmount={guessList.length}
        answer={answer}
        restartGame={restartGame}
      />
      <PreviousGuesses
        guessList={guessList}
        answer={answer}
        setGameStatus={setGameStatus}
      />
      <GuessForm addToGuessList={addToGuessList} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
