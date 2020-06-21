import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { Welcome, Board, EndResult, History } from "../components/index";
import calculateWinner from "../utils/calculateWinner";
import Circle from "../components/common/Circle/Circle";
import Cross from "../components/common/Cross/Cross";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState();
  const [nextPlayer, setNextPlayer] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setWinner(calculateWinner(squares));
    setNextPlayer(Math.round(+Math.random()) ? "X" : "O");
  }, [squares]);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
    squaresCopy[i] = xIsNext ? <Cross /> : <Circle />;
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };
  const resetGame = () => {};
  return (
    <div className={styles.app}>
      <Welcome />
      <Board
        squares={squares}
        handleClick={handleClick}
        nextPlayer={nextPlayer}
        winner={winner}
        resetGame={resetGame}
      />
      <History />
      <EndResult />
    </div>
  );
}
