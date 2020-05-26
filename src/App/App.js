import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { Welcome, Board, GameOver, History } from "../components/index";
import calculateWinner from "../utils/calculateWinner";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [nextPlayer, setNextPlayer] = useState("");

  useEffect(() => {
    setNextPlayer(xIsNext ? "X" : "O");
  }, [xIsNext]);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  return (
    <div className={styles.app}>
      <Welcome />
      <Board
        squares={squares}
        handleClick={handleClick}
        xIsNext={xIsNext}
        nextPlayer={nextPlayer}
      />
      <History />
      <GameOver />
    </div>
  );
}