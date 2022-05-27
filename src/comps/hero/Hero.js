import Glow from "../../utils/glow/Glow";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headingContainer}>
          <div className={styles.line}></div>
          <h1 className={styles.heading}>
            <span className={styles.s}>S</span>trange
            <span className={styles.r}>r</span>
          </h1>
          <div className={styles.thingsContainer}>
            <h2 className={styles.heading2}>Things</h2>
            <h2 className={styles.heading2a}>Things</h2>
          </div>
          {/* <h3 className={styles.heading}>8 ball</h3> */}
        </div>
        <Glow text='⌵' animation='animation' fz='large' />
      </div>
    </section>
  );
}

export default Hero;
