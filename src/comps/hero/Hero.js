import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headingContainer}>
        <div className={styles.line}></div>
          <h1 className={styles.heading}><span>S</span>trange<span>r</span></h1>
          <h1 className={styles.heading2}>Things</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
