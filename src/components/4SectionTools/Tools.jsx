import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";

function Tools() {
  return (
    <Section className="mt-40">
      <Subtitle>
        Technologie, których używam
        <hr className="self-start h-3 mt-1 w-full rounded-md border-0 bg-gradient-to-r from-secondary to-secondary/0" />
      </Subtitle>

      <ul className="mt-20 flex flex-wrap w-full gap-9 justify-start">
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>Postgres</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Git</li>
        <li>Figma</li>
      </ul>
    </Section>
  );
}

export default Tools;
