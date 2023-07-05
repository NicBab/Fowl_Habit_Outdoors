import styles from "../../style";
import { fhoDog } from "../../assets/index/assets.index";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
        <div
          className={`flex flex-col items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        ></div>
        <div className="flex flex-wrap-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[20px] text-dimWhite ss:leading-[40px] leading-[40px] ss:mb-4">
            Welcome to
            <br className="sm:block " />
          </h1>
        </div>
        <h1 className=" font-changa font-semibold xs:text-[68px] text-[30px] tracking-wider text-white xs:leading-[80px] leading-[60px] w-full">
          Fowl Habit Outdoors
        </h1>
        <p className="max-w-[400px] min-w-[250px] mt-5">
          <span className="ss:text-[35px] text-[20px] text-dimWhite">
            Hunting Guide Services
          </span>
          <br className="sm:block" />
          <span className={`${styles.paragraph} indent-56`}>
            South Louisiana Duck hunting guide services
          </span>
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={fhoDog}
          alt="bird dog"
          className="w-[100%] h-[100%] relative rounded-[55%] z-[5]"
        />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-50 white__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
