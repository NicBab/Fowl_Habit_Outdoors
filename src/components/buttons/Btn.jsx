import styles from "../../style";

const Btn = ({ name }) => {
  return (
    <button type="button" className={`${styles.button}`}>
      {name}
    </button>
  );
};

export default Btn;
