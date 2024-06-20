import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";
import ToolCard from "./ToolCard";

import react from "../../assets/logos/react.png";
import node from "../../assets/logos/node.png";
import express from "../../assets/logos/express.png";
import postgres from "../../assets/logos/postgres.png";
import typescript from "../../assets/logos/typescript.png";
import js from "../../assets/logos/js.png";
import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import python from "../../assets/logos/python.png";
import git from "../../assets/logos/git.png";
import figma from "../../assets/logos/figma.png";
import GradientLine from "../Shared/GradientLine";
import Brief from "../Shared/Brief";

function Tools() {
  return (
    <Section
      id="technologie"
      className="pt-40 lg:pt-60 justify-start max-w-7xl"
    >
      <Subtitle>Technologie, których używam</Subtitle>
      <GradientLine />

      {/* <Brief>Mój arsenał technologiczny - moje ulubione zabawki.</Brief> */}
      <Brief>Mój arsenał technologiczny jest do Twojej dyspozycji!</Brief>

      <ul className="mt-20 flex flex-wrap w-full gap-10 lg:gap-16 justify-start font-description text-xl text-center font-medium">
        <ToolCard
          title="React"
          logo={react}
          level={2}
          col1="#00ccff"
          col2="rgb(0, 82, 102, 0.2)"
        />
        <ToolCard
          title="Node"
          logo={node}
          level={3}
          col1="#00cc66"
          col2="rgb(0, 102, 61, 0.2)"
        />
        <ToolCard
          title="Express"
          logo={express}
          level={4}
          col1="#9933ff"
          col2="rgb(64, 0, 128, 0.2)"
        />
        <ToolCard
          title="Postgres"
          logo={postgres}
          level={3}
          col1="#0099cc"
          col2="rgb(0, 77, 102, 0.2)"
        />
        <ToolCard
          title="TypeScript"
          logo={typescript}
          level={0}
          col1="#0066cc"
          col2="rgb(0, 51, 102, 0.2)"
        />
        <ToolCard
          title="JavaScript"
          logo={js}
          level={2}
          col1="#e2cb1e"
          col2="rgb(113, 101, 15, 0.2)"
          className="hidden lg:flex"
        />
        <ToolCard
          title="HTML"
          logo={html}
          level={2}
          col1="#e2701e"
          col2="rgb(135, 67, 18, 0.2)"
          className="hidden lg:flex"
        />
        <ToolCard
          title="CSS"
          logo={css}
          level={2}
          col1="#1e5ce2"
          col2="rgb(15, 46, 113, 0.2)"
          className="hidden lg:flex"
        />
        <ToolCard
          title="Python"
          logo={python}
          level={4}
          col1="#3c79a9"
          col2="rgb(41, 81, 112, 0.2)"
        />
        <ToolCard
          title="Git"
          logo={git}
          level={4}
          col1="#ff6600"
          col2="rgb(102, 41, 0, 0.2)"
        />
        <ToolCard
          title="Figma"
          logo={figma}
          level={5}
          col1="#00e68a"
          col2="rgb(0, 102, 51, 0.2)"
        />
      </ul>
    </Section>
  );
}

export default Tools;
