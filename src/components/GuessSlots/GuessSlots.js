//@ts-check
import React from "react";
import { range } from "../../utils";

export default function GuessSlots({ guessText }) {
  return (
    <>
      {range(5).map((_, i) => (
        <span key={i} className="cell">
          {guessText ? guessText[i] : ""}
        </span>
      ))}
    </>
  );
}
