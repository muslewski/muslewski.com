import { useRef } from "react";
import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";
import GradientLine from "../Shared/GradientLine";
import Brief from "../Shared/Brief";

import Lottie from "react-lottie";
import contactJson from "../../lotties/contact4.json";
import Input from "./Input";
import Button from "../Shared/Button";

function Contact() {
  const form = useRef();

  const handleSendEmail = async (e) => {
    e.preventDefault();
  };

  const contact = {
    loop: true,
    autoplay: true,
    animationData: contactJson,
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
        <Input sign="Imię" invalidText="Jak mogę się do Ciebie zwracać?" />
        <Input
          sign="Email"
          inputType="email"
          invalidText="Spokojnie, nie wyspamuję Cię. Wpisz swój email."
        />
        <Input
          sign="Wiadomość"
          invalidText="Będę wdzięczny za podanie szczegółów w wiadomości."
          textarea
        />
        <Button>Wyślij</Button>
      </form>
    </Section>
  );
}

export default Contact;
