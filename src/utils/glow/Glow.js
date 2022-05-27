import styles from './Glow.module.css'

function Glow({ text, animation }) {
    return (
      <div className={styles.container}>
        <h3 className={`${styles.item1} ${styles[animation]}`}>{text}</h3>
        <h3 className={`${styles.item2} ${styles[animation]}`}>{text}</h3>
      </div>
    );
}

export default Glow;
