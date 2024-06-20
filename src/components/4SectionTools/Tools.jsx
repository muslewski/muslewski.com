import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";
import ToolCard from "./ToolCard";

import react from "../../assets/logos/react.png";
import node from "../../assets/logos/node.png";
import express from "../../assets/logos/express.png";
import postgres from "../../assets/logos/postgres.png";
import typescript from "../../assets/logos/typescript.png";
import python from "../../assets/logos/python.png";
import git from "../../assets/logos/git.png";
import figma from "../../assets/logos/figma.png";
import GradientLine from "../Shared/GradientLine";
import Brief from "../Shared/Brief";

function Tools() {
  return (
    <Section id="technologie" className="pt-40">
      <Subtitle>Technologie, których używam</Subtitle>
      <GradientLine />

      {/* <Brief>Mój arsenał technologiczny - moje ulubione zabawki.</Brief> */}
      <Brief>Mój arsenał technologiczny jest do Twojej dyspozycji!</Brief>

      <ul className="mt-20 flex flex-wrap w-full gap-10 justify-start font-description text-xl text-center font-medium">
        <ToolCard
          logo={react}
          level={2}
          col1="#00ccff"
          col2="rgb(0, 82, 102, 0.2)"
        >
          React
        </ToolCard>
        <ToolCard
          logo={node}
          level={3}
          col1="#00cc66"
          col2="rgb(0, 102, 61, 0.2)"
        >
          Node
        </ToolCard>
        <ToolCard
          logo={express}
          level={4}
          col1="#9933ff"
          col2="rgb(64, 0, 128, 0.2)"
        >
          Express
        </ToolCard>
        <ToolCard
          logo={postgres}
          level={3}
          col1="#0099cc"
          col2="rgb(0, 77, 102, 0.2)"
        >
          Postgres
        </ToolCard>
        <ToolCard
          logo={typescript}
          level={0}
          col1="#0066cc"
          col2="rgb(0, 51, 102, 0.2)"
        >
          TypeScript
        </ToolCard>
        <ToolCard
          logo={python}
          level={4}
          col1="#3c79a9"
          col2="rgb(41, 81, 112, 0.2)"
        >
          Python
        </ToolCard>
        <ToolCard
          logo={git}
          level={4}
          col1="#ff6600"
          col2="rgb(102, 41, 0, 0.2)"
        >
          Git
        </ToolCard>
        <ToolCard
          logo={figma}
          level={5}
          col1="#00e68a"
          col2="rgb(0, 102, 51, 0.2)"
        >
          Figma
        </ToolCard>
      </ul>
    </Section>
  );
}

export default Tools;
