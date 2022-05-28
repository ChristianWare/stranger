import Glow from '../../utils/glow/Glow';
import styles from './IndvQuestion.module.css'
import BG from "../../../public/images/bg.jpg";
import Image from 'next/image';

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
        <Glow text={text}  fz={fz} />
      </div>
      <div className={`${styles.content} ${styles[rr]}`}>
        <div className={styles.left}>
          <h2 className={styles.heading}>{heading}</h2>
          
          <p className={styles.copy} lang='en'>
            Lorem Khaled Ipsum is a major key to success. We the best. Lion! The
            first of the month is coming, we have to get money, we have no Lorem
            Khaled Ipsum is a major key to success. We the best. Lion! The first
            of the month is coming, we have to get money, we have no choice.
            choice.
          </p>
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

export default IndvQuestion
