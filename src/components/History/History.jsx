import React from "react";
import styles from "./History.module.css";

export default function History() {
  return (
    <div className={styles.history}>
      <h2 className={styles.title}>HISTORY</h2>
      <div className={styles.logBoard}>
        <button className={styles.logEntry}>Example Log 1</button>
        <button className={styles.logEntry}>Example Log 2</button>
        <button className={styles.logEntry}>Example Log 3</button>
      </div>
    </div>
  );
}
