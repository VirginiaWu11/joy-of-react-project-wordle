import React, { useEffect } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Cell = ({ letter, status }) => {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
};

export default function GuessSlots({ guessText, answer, setGameStatus }) {
  const guessCorrectnessArray = checkGuess(guessText, answer);

  useEffect(() => {
    if (guessCorrectnessArray?.every((el) => el.status === "correct")) {
      setGameStatus("won");
    }
  }, [guessCorrectnessArray, setGameStatus]);

  return (
    <>
      {range(5).map((i) => (
        <Cell
          key={i}
          letter={guessCorrectnessArray?.[i].letter}
          status={guessCorrectnessArray?.[i].status}
        />
      ))}
    </>
  );
}
