import styles from "../../style";
import { Hero, About, Why, CTA } from "../../components/index/components.index";

const HomePg = () => {
  return (
    <div id="home">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Why />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default HomePg;
