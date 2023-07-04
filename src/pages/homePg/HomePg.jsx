import styles from "../../style";
import { Hero } from "../../components/index/components.index";

const HomePg = () => {
  return (
    <div id="home">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default HomePg;
