import Glow from "../../utils/glow/Glow";
import styles from "./IndvQuestion.module.css";
import Ball from '../../utils/8ball/Ball'

function IndvQuestion({
  outlineDirection = "r",
  rr = "no",
  heading,
}) {
  return (
    <section className={styles.container}>
      <div className={`${styles.top} ${styles[outlineDirection]}`}>
      </div>
      <div className={`${styles.content} ${styles[rr]}`}>
        <div className={styles.left}>
          <h2 className={styles.question}>{heading}</h2>
          <h3 className={styles.click}>
            <Glow text={rr === "no" ? "▶︎ ▶︎ ▶︎ ▶︎" : "◀︎ ◀︎ ◀︎ ◀︎"} fz='tiny' />
          </h3>
        </div>
        <div className={styles.right}>
          <div className={styles.ballContainer}>
            <Ball />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndvQuestion;
