import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { Btn, SecBtn } from "../index/components.index";
import { fhoDog } from "../../assets/index/assets.index";

const About = () => {
  return (
    <section className={`${layout.section} relative mb-[50px]`}>
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 left-10 white__gradient opacity-[.15]"></div>
      <div className={`${layout.sectionInfo} z-[4]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={fhoDog}
            alt="dog"
            className="w-[160px] h-[140px] sm:w-[250px] sm:h-[250px] relative right-20 top-10 rounded-md z-[2] mb-8 shadow-3"
          />
        </div>
        <div className={`${styles.flexCenter} `}>
          <img
            src={fhoDog}
            alt="dog2"
            className="w-[160px] h-[140px] sm:w-[250px] sm:h-[250px] relative left-10 -top-10 sm:left-20 sm:-top-10 rounded-md z-[1] shadow"
          />
        </div>
      </div>
      <div className={`${layout.sectionInfo} z-[3]`}>
        <h2 className={styles.heading2}>What We Do...</h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>
          If you don't have access to Adobe Fonts, you may need to consider
          alternative methods for including the font in your website, such as
          downloading the font files and hosting them locally or using a
          third-party font service.
        </p>
        <div className={`${layout.btnContainer}`}>
          <Link to="/about">
            <Btn name="ABOUT FHO" />
          </Link>
          <Link to="/contact">
            <SecBtn name="CONTACT FHO" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
