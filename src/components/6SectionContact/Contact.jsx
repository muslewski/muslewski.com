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
  const [isSend, setIsSend] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const form = useRef(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setMessageError("");

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (name.length < 1) {
      setNameError("Jak mogę się do Ciebie zwracać?");
      nameRef.current.focus();
    } else if (email.length < 1) {
      setEmailError("Spokojnie, nie wyspamuję Cię. Wpisz swój email.");
      emailRef.current.focus();
    } else if (!email.includes("@")) {
      emailRef.current.focus();
      setEmailError(
        "Hmmm, ten adres email wygląda dziwnie. Może spróbuj jeszcze raz z '@'?"
      );
    } else if (!EmailValidator.validate(email)) {
      emailRef.current.focus();
      setEmailError("Czy na pewno wpisałeś/aś prawidłowy adres email?");
    } else if (message.length < 1) {
      messageRef.current.focus();
      setMessageError(
        "Napisz wiadomość, abyśmy mogli rozpocząć owocną współpracę."
      );
    } else {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      setButtonClicked(true);

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

  const contact = {
    loop: true,
    autoplay: true,
    animationData: contactJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const message = {
    loop: false,
    autoplay: true,
    animationData: messageJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Section className="mt-32" id="kontakt">
      <div className="self-start mb-10">
        <Lottie options={contact} height={180} width={200} />
      </div>
      <Subtitle>
        Zapraszam do kontaktu!
        <GradientLine />
      </Subtitle>
      <Brief>
        Jeśli masz pytania, chcesz omówić projekt lub nawiązać współpracę, bez
        wahania wypełnij poniższy formularz.
      </Brief>

      <form
        ref={form}
        className="mt-16 flex flex-col gap-12"
        onSubmit={handleSendEmail}
      >
        <Input
          ref={nameRef}
          name="user_name"
          title="Imię"
          send={isSend}
          errorText={nameError}
        />
        <Input
          ref={emailRef}
          name="user_email"
          title="Email"
          inputType="email"
          send={isSend}
          errorText={emailError}
        />
        <Input
          ref={messageRef}
          name="message"
          title="Wiadomość"
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
          Wyślij
        </Button>
        {isSend && (
          <div className="fixed z-40 top-10 right-1/2 translate-x-1/2 pointer-events-none">
            <Lottie options={message} width={350} />
          </div>
        )}
      </form>
    </Section>
  );
}

export default Contact;
