import React from "react";
import styles from "./Board.module.css";
import Grid from "../Grid/Grid.jsx";
import Welcome from "../Welcome/Welcome";
import GameOver from "../GameOver/GameOver";

export default function Board({
  squares,
  handleClick,
  currentPlayer,
  winner,
  showWelcome,
  handlePlayerSelect,
  handleGameStart,
  handleReset,
}) {
  return (
    <div className={styles.board}>
      {showWelcome ? (
        <Welcome
          handleGameStart={handleGameStart}
          handlePlayerSelect={handlePlayerSelect}
        />
      ) : (
        <Grid
          squares={squares}
          handleClick={handleClick}
          currentPlayer={currentPlayer}
        />
      )}
      {winner && <GameOver handleReset={handleReset} winner={winner} />}
    </div>
  );
}
