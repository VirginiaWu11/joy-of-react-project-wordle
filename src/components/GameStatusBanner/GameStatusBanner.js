import React from "react";
import Banner from "../Banner/Banner";

export default function GameStatusBanner({
  gameStatus,
  guessAmount,
  answer,
  restartGame,
}) {
  console.log({ gameStatus });
  switch (gameStatus) {
    case "won":
      return (
        <HappyBanner guessAmount={guessAmount} restartGame={restartGame} />
      );
    case "lost":
      return <SadBanner answer={answer} restartGame={restartGame} />;
    default:
      <></>;
  }
  return <div></div>;
}

function HappyBanner({ guessAmount, restartGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessAmount} guesses</strong>.
      </p>
      <button onClick={restartGame}>Restart Game</button>
    </Banner>
  );
}

function SadBanner({ answer, restartGame }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={restartGame}>Restart Game</button>
    </Banner>
  );
}
