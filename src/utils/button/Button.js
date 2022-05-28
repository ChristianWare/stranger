import Link from "next/link";
import styles from "./Button.module.css";

function Button({
  text,
  href = "",
  title,
  btnType = "btn",
  color = "primary",
}) {
  return (
    <Link href={href}>
      <a className={styles.container} title={title}>
        <button className={`${styles[btnType]} ${styles[color]}`}>
          {text}
        </button>
      </a>
    </Link>
  );
}

export default Button;
