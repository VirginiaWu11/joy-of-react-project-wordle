import React from "react";

export default function GuessSlots({ guessText }) {
  const textArr =
    guessText.length > 0 ? guessText.split("") : new Array(5).fill("");
  return (
    <>
      {textArr.map((char, i) => (
        <span key={i} className="cell">
          {char}
        </span>
      ))}
    </>
  );
}
