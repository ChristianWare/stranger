import React, { useState } from "react";
import Glow from "../../utils/glow/Glow";
import styles from "./QuestionAnswer.module.css";
import Button from "../../utils/button/Button";

const answers = [
  "Signs point to yes",
  "Ask again later",
  "My sources say no",
  "Signs point to yes",
  "Signs point to yes",
  "Who Knows?",
  "Ask again later",
  "It is certain!",
  "My sources say no",
  "Without a doubt",
];

function QuestionAnswer() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>MORE QUESTIONS? TYPE THEM HERE....</h2>
        <form onSubmit={getAnswer}>
          <div>
            <label htmlFor=''></label>
            <input
              type='text'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className={styles.input}
            />
            <div className={styles.buttonContainer}>
              <Button type='submit' text='get answer' />
            </div>
          </div>
        </form>
        <div className={styles.answerBox}>
          <Glow text={answer} fz='tiny' color='blue' />
        </div>
      </div>
    </section>
  );
}

export default QuestionAnswer;
