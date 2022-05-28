import Glow from "../../utils/glow/Glow";
import styles from "./IndvQuestion.module.css";
import BG from "../../../public/images/bg.jpg";
import Image from "next/image";
import Button from "../../utils/button/Button";

function IndvQuestion({
  outlineDirection = "r",
  text,
  fz,
  rr = "no",
  heading,
  price,
}) {
  return (
    <section className={styles.container}>
      <div className={`${styles.top} ${styles[outlineDirection]}`}>
        <Glow text={text} fz={fz} />
      </div>
      <div className={`${styles.content} ${styles[rr]}`}>
        <div className={styles.left}>
          <h2 className={styles.question}>{heading}</h2>
          <div className={styles.btnContainer}>
            <Button text='Get Answer' />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image src={BG} width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndvQuestion;
