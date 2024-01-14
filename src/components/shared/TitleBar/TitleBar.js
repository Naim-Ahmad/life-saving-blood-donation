import styles from "./TitleBar.module.css";
const TitleBar = ({ label }) => {
  return (
    <div className={styles.bar}>
      <h1 className="text-2xl lg:text-4xl text-white font-medium ml-10">
        {label}
      </h1>
    </div>
  );
};

export default TitleBar;
