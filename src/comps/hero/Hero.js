import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headingContainer}>
        <div className={styles.line}></div>
          <h1 className={styles.heading}><span>S</span>trange<span>r</span></h1>
          <h2 className={styles.heading2}>Things</h2>
          <h3 className={styles.heading}>8 ball</h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
