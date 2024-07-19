import styles from "./Wrapper.module.css";

export const Wrapper = (props) => {
  const wrapperContent = props.children;
  return <div className={styles.wrapper}>{wrapperContent}</div>;
};
