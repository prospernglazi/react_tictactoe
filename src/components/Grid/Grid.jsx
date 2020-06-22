import React from "react";
import styles from "./Grid.module.css";

import Square from "../Square/Square.jsx";

export default function Grid({ squares, handleClick, currentPlayer }) {
  return (
    <ul className={styles.grid}>
      {squares.map((_, i) => (
        <Square
          key={i}
          className={styles.square}
          value={squares[i]}
          currentPlayer={currentPlayer}
          handleClick={() => handleClick(i)}
        />
      ))}
    </ul>
  );
}
