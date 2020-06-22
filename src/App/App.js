import React, { useState, useEffect, createContext } from "react";
import styles from "./App.module.css";

import { Board, History } from "../components/index";
import calculateWinner from "../utils/calculateWinner";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setWinner(calculateWinner(squares));
    setCurrentPlayer(xIsNext ? "X" : "O");
  }, [squares, xIsNext]);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
    squaresCopy[i] = currentPlayer;
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const handlePlayerSelect = (value) => {
    setXIsNext(value === "X" ? true : false);
  };

  const handleGameStart = (e) => {
    e.preventDefault();
    setShowWelcome(false);
    setCurrentPlayer(xIsNext ? "X" : "O");
  };

  const handleReset = () => {};

  return (
    <div className={styles.app}>
      <Board
        squares={squares}
        handleClick={handleClick}
        xIsNext={xIsNext}
        currentPlayer={currentPlayer}
        winner={winner}
        handleReset={handleReset}
        handlePlayerSelect={handlePlayerSelect}
        handleGameStart={handleGameStart}
        showWelcome={showWelcome}
      />
      <History />
    </div>
  );
}
