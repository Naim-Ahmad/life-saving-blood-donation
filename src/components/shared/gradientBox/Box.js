import styles from "./Box.module.css";

const Box = () => {
  return <div className={`${styles.box} max-md:hidden`}></div>;
};

export default Box;
