//@ts-check
import React from "react";
import { range } from "../../utils";
import GuessSlots from "../GuessSlots/GuessSlots";

function PreviousGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {range(0, 6).map((_, i) => (
        <p className="guess" key={i}>
          <GuessSlots guessText={guessList[i]?.text ?? ""} />
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
