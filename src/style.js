const styles = {
    boxWidth: "max-w-[100vw] w-full",

    button: "font-council tracking-widest py-2 px-4 w-[200px] bg-secondary text-[25px] text-primary rounded-[10px] hover:text-white flex flex-center justify-center",
    buttonSecondary: "font-council tracking-widest py-2 px-4 w-[200px] text-secondary hover:text-white text-[25px] border border-1 border-secondary rounded-[10px] flex flex-center justify-center",

    title: "font-council tracking-widest text-primary text-[45px] xs:text-[90px] xs:leading-[80px] leading-[60px] w-full ml-5 xs:ml-10",
    text: "font-council tracking-widest",
    heading2: "font-council tracking-widest flex justify-center xs:text-[48px] text-[40px] text-white xs:leading-[85px] leading-[50px] w-full",
    paragraph: "font-council tracking-widest text-dimWhite m-5 text-[25px] md:text-[25px] leading-[25px] indent-5",

    cardHeading: "font-council flex justify-center font-semibold text-[20px] text-white leading-[40px] w-full",
    cardParagraph: "m-5 font-council font-normal text-dimWhite text-[14px] leading-[25px] indent-5",

    flexStart: "flex justify-center items-start",
    flexCenter: "flex justify-center items-center",
    flexEnd: "flex justify-center items-end",

    selfEnd: "flex self-end",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexCenter} flex-col`,
    sectionInfoReverse: `flex-1 ${styles.flexStart} flex-col-reverse`,

    btnContainer: "md:flex flex-row space-x-4"
  };
  
  export default styles;
