//@ts-check
import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

export default function GuessSlots({ guessText, answer }) {
  const guessCorrectnessArray = checkGuess(guessText, answer);
  return (
    <>
      {range(5).map((_, i) => (
        <span
          key={i}
          className={`cell ${
            guessCorrectnessArray && guessCorrectnessArray[i].status
          }`}
        >
          {guessCorrectnessArray ? guessCorrectnessArray[i].letter : ""}
        </span>
      ))}
    </>
  );
}
