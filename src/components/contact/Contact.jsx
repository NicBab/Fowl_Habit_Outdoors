import { useRef, useState } from "react";
import styles, { layout } from "../../style";
import { Btn } from "../index/components.index";
import emailjs from "@emailjs/browser";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";

const ContactForm = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

    const handleEmailSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_o8nx619",
          "template_pufwahh",
          formRef.current,
          "yqQNQKpFONM3NY_qq"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexEnd} `}>
      <section className={layout.section}>
        <div className={`${layout.sectionInfo} z-[1]`}>
          <h2 className={styles.heading2}>
            Interested?... <br className="sm:block hidden" />
            Contact Us!
            <br className="sm:block hidden" />
          </h2>
          <span className="font-council text-white text-[40px] leading-[40px] py-10">
            Call or Email to schedule your dates!
          </span>

          {/* REDO WITH MAP */}
          <div className="text-dimWhite">
            <div className="flex flex-col">
              <span className="mb-5">
                <PhoneInTalkIcon className="mr-5" />
                (337) 400-3824
              </span>
              <span className="mb-5">
                <AlternateEmailIcon className="mr-5" />
                FowlHabitoutfitters@yahoo.com
              </span>
              <span className="mb-5">
                <PlaceIcon className="mr-5" />
                226 Arthur Avenue, Lake Arthur, LA. 70549
              </span>
            </div>
          </div>
        </div>

        <div className={`${layout.sectionImg} flex-col z-[1]`}>
          <form
            ref={formRef}
            onSubmit={handleEmailSubmit}
            className={`${styles.flexStart} flex-col w-[100%] input`}
          >
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_Email" />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              className="textarea mb-10 "
            />
          </form>
          <Btn type="submit" name="send email" />
        </div>
        <div className="absolute z-[0] w-[60%] h-[50%] -top-[0] rounded-full blue__gradient opacity-[.3]" />
      </section>
      <div>
        {done
          ? "Thank you for your interest... Your email has been sent!"
          : null}
      </div>
    </div>
  );
};

export default ContactForm;
