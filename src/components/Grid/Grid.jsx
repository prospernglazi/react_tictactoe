import React from "react";
import styles from "./Grid.module.css";

import Square from "../Square/Square.jsx";

export default function Grid({ squares, handleClick, nextPlayer }) {
  return (
    <ul className={styles.grid}>
      {squares.map((square, i) => (
        <Square
          key={i}
          className={styles.square}
          value={squares[i]}
          nextPlayer={nextPlayer}
          handleClick={() => handleClick(i)}
        />
      ))}
    </ul>
  );
}
