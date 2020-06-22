import React from "react";
import styles from "./GameOver.module.css";

import Overlay from "../common/Overlay";

export default function GameOver({ winner, resetGame }) {
  return (
    <div className={styles.gameover}>
      <Overlay>
        <>
          <h1>Winner </h1>
          <h1 className={styles.winner}>{winner}</h1>
        </>
        <button onClick={resetGame}>Start New Game</button>
      </Overlay>
    </div>
  );
}
