import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailValidator from "email-validator";
import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";
import GradientLine from "../Shared/GradientLine";
import Brief from "../Shared/Brief";

import Lottie from "react-lottie";
import contactJson from "../../lotties/contact4.json";
import messageJson from "../../lotties/message.json";
import Input from "./Input";
import Button from "../Shared/Button";

function Contact() {
  const { t, i18n } = useTranslation();

  // State for sending status
  const [isSend, setIsSend] = useState(false);
  // State for disabling the button before we find out if the message was sent
  const [buttonClicked, setButtonClicked] = useState(false);

  // States that are used for displaying error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Ref that is responsible for sending form
  const form = useRef(null);

  // Refs for validating the input value
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Reset the error messages
    setNameError("");
    setEmailError("");
    setMessageError("");

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (name.length < 1) {
      // If there is no name
      setNameError("FormError1");
      nameRef.current.focus();
    } else if (email.length < 1) {
      // If there is no email
      setEmailError("FormError2");
      emailRef.current.focus();
    } else if (!email.includes("@")) {
      // If email don't have @
      emailRef.current.focus();
      setEmailError("FormError3");
    } else if (!EmailValidator.validate(email)) {
      // If email is valid
      emailRef.current.focus();
      setEmailError("FormError4");
    } else if (message.length < 1) {
      // If there is no message
      messageRef.current.focus();
      setMessageError("FormError5");
    } else {
      setButtonClicked(true);

      // Heart of the message sending
      emailjs
        .sendForm(
          "service_1aqik82",
          "template_f8g2d8r",
          form.current,
          "XeDaxKDYwvWpoAeQo"
        )
        .then((result) => {
          console.log(result.text);
          setIsSend(true);
          setTimeout(() => {
            setIsSend(false);
            setButtonClicked(false);
          }, 2500);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  const contactAnimation = {
    loop: true,
    autoplay: true,
    animationData: contactJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const messageAnimation = {
    loop: false,
    autoplay: true,
    animationData: messageJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Section className="pt-36 lg:pt-56 justify-start max-w-7xl" id="kontakt">
      <div className="self-start mb-10 w-48 h-40 lg:w-80 lg:h-72">
        <Lottie options={contactAnimation} />
      </div>
      <Subtitle>{t("InviteToContact")}</Subtitle>
      <GradientLine />

      <Brief>{t("IfQuestions")}</Brief>

      <form
        ref={form}
        className=" self-start w-full mt-16 flex flex-col gap-12"
        onSubmit={handleSendEmail}
      >
        <Input
          ref={nameRef}
          name="user_name"
          title={t("Name")}
          send={isSend}
          errorText={nameError}
        />
        <Input
          ref={emailRef}
          name="user_email"
          title={t("Email")}
          inputType="email"
          send={isSend}
          errorText={emailError}
        />
        <Input
          ref={messageRef}
          name="message"
          title={t("Message")}
          send={isSend}
          errorText={messageError}
          textarea
        />
        <Button
          className={
            buttonClicked
              ? "hover:scale-105 transition-transform pointer-events-none bg-secondary/80"
              : "hover:scale-105 transition-transform"
          }
        >
          {buttonClicked ? t("Sent") : t("Send")}
        </Button>
        {isSend && (
          <div className="fixed z-40 top-10 right-1/2 translate-x-1/2 pointer-events-none w-80 lg:w-1/4 lg:top-1/4 lg:right-1/4">
            <Lottie options={messageAnimation} />
          </div>
        )}
      </form>
    </Section>
  );
}

export default Contact;
