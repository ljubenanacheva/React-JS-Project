import styles from "./ErrorBox.module.css";

export const ErrorBox = ({ message }) => {
  return <div className={styles.errorbox}>{message}</div>;
};
