import React from "react";

export default function Banner({ gameStatus, guessAmount, answer }) {
  console.log({ gameStatus });
  switch (gameStatus) {
    case "won":
      return <HappyBanner guessAmount={guessAmount} />;
    case "lost":
      return <SadBanner answer={answer} />;
    default:
      <></>;
  }
  return <div></div>;
}

function HappyBanner({ guessAmount }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessAmount} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}
