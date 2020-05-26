import React from "react";
import styles from "./Board.module.css";
import Grid from "../Grid/Grid.jsx";

export default function Board({ squares, handleClick, xIsNext, nextPlayer }) {
  return (
    <div className={styles.board}>
      <Grid
        squares={squares}
        handleClick={handleClick}
        xIsNext={xIsNext}
        nextPlayer={nextPlayer}
      />
    </div>
  );
}
