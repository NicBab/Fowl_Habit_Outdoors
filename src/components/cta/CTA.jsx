import { Link } from "react-router-dom";
import styles from "../../style";
import { Btn, Social } from "../.././components/index/components.index";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} mt-[50px] sm:flex-row flex-col bg-black-gradient rounded-[20px] z-[1] glass-card-2`}
    >
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-50 white__gradient opacity-[.1]"></div>
      <div className="flex-1 flex flex-col z-[1]">
        <h2 className={styles.heading2}>Contact for Scheduling!</h2>
      </div>
      <div
        className={`${styles.flexCenter} flex-col sm:ml-10 ml-0 sm:mt-0 mt-10 z-[1]`}
      >
        <Link to="/contact">
          <Btn name="CONTACT FHO" />
        </Link>
        <div className={`${styles.flexCenter} max-w-[470px] m-5`}>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default CTA;
