import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { Btn, SecBtn } from "../index/components.index";
import { WhyCard } from "../index/components.index";
import { whyData } from "../../constants/why-data/why-data";

const Why = () => {
  return (
    <section id="features" className={`${layout.sectionReverse} mt-10`}>
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
            If you don't have access to Adobe Fonts, you may need to consider
            alternative methods for including the font in your website, such as
            downloading the font files and hosting them locally or using a
            third-party font service.
          </p>
        </div>
        <div className={`${layout.btnContainer}`}>
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
