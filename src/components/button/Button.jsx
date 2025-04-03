import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = () => {
  return (
    <Link to="/article">
      <button className={`${styles.matrix} ${styles.btn}`}>
        <span>Læs Mere</span>
        <div className={styles.rain}></div> {/* Update to use codeRain */}
      </button>
    </Link>
  );
};

export default Button;
