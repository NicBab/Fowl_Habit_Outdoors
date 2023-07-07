import styles from "../../style";
// import { fhoDog } from "../../assets/index/assets.index";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
        <div
          className={`flex flex-col items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        ></div>
        <div className="flex flex-wrap-row justify-between items-center w-full">
          <h1
            className={`${styles.text} flex-1 ss:text-[40px] text-[20px] text-primary ss:leading-[40px] leading-[40px] ss:mb-4`}
          >
            Welcome to
            <br className="sm:block " />
          </h1>
        </div>
        <div
          className={`${styles.title}`}
        >
          Fowl Habit Outfitters
        </div>
        <p className="max-w-[400px] min-w-[250px] mt-5">
          <span
            className={`${styles.text} ss:text-[35px] text-[30px] text-primary`}
          >
            Hunting Guide Services
          </span>
          <br className="sm:block" />
          <span className={`${styles.paragraph} text-primary`}>
            South Louisiana Duck hunting guide services. If you don't have
            access to Adobe Fonts, you may need to consider alternative methods
            for including the font in your website, such as downloading the font
            files and hosting them locally or using a third-party font service.
          </span>
        </p>
      </div>
      {/* <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={fhoDog}
          alt="bird dog"
          className="w-[100%] h-[100%] relative rounded-[55%] z-[5]"
        />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-50 white__gradient opacity-[.5]"></div>
      </div> */}
    </section>
  );
};

export default Hero;
