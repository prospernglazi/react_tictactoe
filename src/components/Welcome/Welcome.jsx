import React from "react";
import styles from "./Welcome.module.css";

import Overlay from "../common/Overlay";

export default function Welcome({ handlePlayerSelect, handleGameStart }) {
  return (
    <div className={styles.welcome}>
      <Overlay>
        <h1>Welcome to TicTacToe</h1>
        <p>Choose starting player</p>
        <form onSubmit={handleGameStart}>
          <div className={styles.playerSelect}>
            <label htmlFor="x">X</label>
            <input
              onChange={(e) => handlePlayerSelect(e.target.value)}
              id="x"
              name="player"
              type="radio"
              value="X"
              required
            />
            <label htmlFor="o">O</label>
            <input
              onChange={(e) => handlePlayerSelect(e.target.value)}
              id="o"
              name="player"
              type="radio"
              value="O"
              required
            />
          </div>
          <button type="submit" className={styles.startButton}>
            Start
          </button>
        </form>
      </Overlay>
    </div>
  );
}
