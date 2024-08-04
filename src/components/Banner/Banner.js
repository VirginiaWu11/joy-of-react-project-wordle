import React from "react";

export default function Banner({
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
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessAmount} guesses</strong>.
      </p>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
}

function SadBanner({ answer, restartGame }) {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
}
