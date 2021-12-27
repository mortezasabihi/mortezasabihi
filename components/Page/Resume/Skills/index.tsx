import Item from "./Item";
import { Skill } from "types";

const Skills = () => {
  const svgDir = require.context("!@svgr/webpack!assets/icons/skills");

  const skills: Skill[] = [
    {
      name: "html",
      color: "#D84A24",
    },
    {
      name: "css",
      color: "#2549D9",
    },
    {
      name: "javascript",
      color: "#EBD41B",
    },
    {
      name: "typescript",
      color: "#2F71BB",
    },
    {
      name: "sass",
      color: "#C05C8F",
    },
    {
      name: "tailwindCss",
      color: "#16B4C1",
    },
    {
      name: "vue",
      color: "#42b883",
    },
    {
      name: "nuxt",
      color: "#01BB87",
    },
    {
      name: "vuetify",
      color: "#1497F6",
    },
    {
      name: "react",
      color: "#00d8ff",
    },
    {
      name: "next",
      color: "#000000",
    },
    {
      name: "material-UI",
      color: "#027FFF",
    },
    {
      name: "webpack",
      color: "#1A71B7",
    },
    {
      name: "docker",
      color: "#208FE1",
    },
    {
      name: "npm",
      color: "#BE3536",
    },
    {
      name: "yarn",
      color: "#2B87B2",
    },
    {
      name: "git",
      color: "#E44C31",
    },
  ];

  const images = skills.map((skill) => {
    return {
      name: skill.name,
      svg: svgDir(`./${skill.name.toLowerCase()}.svg`).default,
    };
  });

  const renderImg = (name: string) => {
    // @ts-ignore
    const Svg = images.find((img) => img.name === name).svg;
    return <Svg />;
  };

  return (
    <div className="mb-8">
      <h3 className="section-heading">Skills</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <Item
            key={index}
            label={skill.name.toLowerCase()}
            color={skill.color}
          >
            {renderImg(skill.name)}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Skills;
