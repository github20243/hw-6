import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerBall} />
      <div className={styles.spinnerBall} />
      <div className={styles.spinnerBall} />
    </div>
  );
};



export default Spinner;
