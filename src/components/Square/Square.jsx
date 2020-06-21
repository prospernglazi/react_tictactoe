import React, { useState } from "react";
import styles from "./Square.module.css";

export default function Square({ value, handleClick, nextPlayer }) {
  const [flip, setFlip] = useState(false);
  const onClick = () => {
    setFlip(true);
    handleClick();
  };
  return (
    <div className={styles.square}>
      <button
        style={flip ? { transform: "rotateY(180deg" } : {}}
        onClick={onClick}
      >
        <div className={styles.front}></div>
        <div className={styles.back}>{value}</div>
      </button>
      <div className={styles.nextIndicator}>{!flip && nextPlayer}</div>
    </div>
  ); 
}
