import Glow from "../glow/Glow";
import styles from "./ball.module.css";

function Ball() {
  return (
    <>
      <div className={styles.label}>
        <div className={styles.glowBox}>
          <Glow text='▼' fz='tri' color='blue' />
        </div>
      </div>
    </>
  );
}

export default Ball;
