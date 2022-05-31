import styles from "./Button.module.css";

function Button({
  text,
  title,
  btnType = "btn",
  color = "primary",
}) {
  return (
      <a className={styles.container} title={title}>
        <button className={`${styles[btnType]} ${styles[color]}`}>
          {text}
        </button>
      </a>
  );
}

export default Button;
