import React, { useState } from "react";
import Glow from "../glow/Glow";
import styles from "./ball.module.css";

const answers = [
  "Signs point to yes",
  "Ask again later",
  "My sources say no",
  "Signs point to yes",
  "Signs point to yes",
  "Who knows?",
  "Ask again later",
  "It is certain!",
  "My sources say no",
  "Without a doubt",
];

function Ball() {
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return (
    <>
      <div className={styles.label} onClick={getAnswer}>
        <div className={styles.glowBox}>
          <Glow text='▼' fz='tri' color='blue' />
        </div>
        <div className={styles.answerBox}>
          <Glow text={answer} fz='tiny' color='blue' />
        </div>
      </div>
    </>
  );
}

export default Ball;
