import React from "react";
import styles from "./Board.module.css";
import Grid from "../Grid/Grid.jsx";

export default function Board({
  squares,
  handleClick,
  xIsNext,
  nextPlayer,
  resetGame,
  winner,
}) {
  return (
    <div className={styles.board}>
      <Grid
        squares={squares}
        handleClick={handleClick}
        xIsNext={xIsNext}
        nextPlayer={nextPlayer}
      />
      {winner && (
        <div className={styles.gameOver}>
          <h1>
            Winner <span>{winner}</span>
          </h1>
          <button onClick={resetGame}>Start New Game</button>
        </div>
      )}
    </div>
  );
}
