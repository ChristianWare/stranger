import React, { useState } from "react";
import Glow from "../../utils/glow/Glow";
import styles from "./QuestionAnswer.module.css";

const answers = [
  "Signs point to yes",
  "Ask again later",
  "My sources say no",
  "Signs point to yes",
  "Signs point to yes",
  "Better not tell you now",
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
      <Glow text='Ask your own questions:' fz='tiny' />
      <form onSubmit={getAnswer}>
        <div>
          <label htmlFor=''></label>
          <input
            type='text'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button type='submit' className={styles.button}>
            Get Answer
          </button>
        </div>
      </form>
      <div className='circle'>
        <p>{answer}</p>
      </div>
    </section>
  );
}

export default QuestionAnswer;
