import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { Btn, SecBtn } from "../index/components.index";
import { WhyCard } from "../index/components.index";
import { whyData } from "../../constants/why-data/why-data";

const Why = () => {
  return (
    <section id="features" className={`${layout.section} mt-10`}>

      {/* gradient start */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 white__gradient opacity-[.15]"></div>
      {/* gradient end */}

  
      <div className={`${layout.sectionInfo} mb-10 z-[1]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Why Choose FHO?
        </h2>
        <div className={`max-w-[500px]`}>
          <p className={`${styles.paragraph}`}>
           some text here..
          </p>
        </div>
        <div className="md:flex flex-row">
          <Link to="/gallery">
            <Btn name="VIEW GALLERY" />
          </Link>
          <Link to="/about">
            <SecBtn name="ABOUT FHO" />
          </Link>
        </div>
      </div>
      <div className={`${layout.sectionImg} ${styles.padding} flex-wrap`}>
        {whyData.map((props, index) => (
          <WhyCard key={index} props={props} />
        ))}
      </div>
    </section>
  );
};

export default Why;
