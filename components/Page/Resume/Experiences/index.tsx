import Item from "./Item";
import { Experience } from "types";

const Experiences = () => {
  const experiences: Experience[] = [
    {
      company: "kamelbarchasb",
      date: "JUN 2019 - NOV 2019",
      type: "Full Time",
      description: [
        "Developed the company’s personalized ERP system in the printing labels industry called PERP using VueJS framework.",
        "Got familiar with teamwork and Collaborated with 4 teammates and grew with them.",
        "Revamped UI interface to increase user experience.",
        "Worked closely with programmers and clients to meet project requirements, goals, and desired functionality.",
      ],
    },
    {
      company: "Apochi.com - Your Travel Gateway To Iran",
      date: "DEC 2019 - JUL 2020",
      type: "Part Time",
      description: [
        "Manage website development project from initial design through completion using VueJS and NuxtJS frameworks, optimizing all cross-browser and multi-platform compatibility, and leading the project alone in the first 6 months.",
        "Designed and prepared end-to-end product features in collaboration with UI/UX designers and stakeholders that enhanced performance by up to 80%.",
        "Made website pages SEO Friendly by developing in SSR mode, adding required meta tags, applying JSON-LD, reducing image size, and lazy-loading.",
      ],
    },
    {
      company: "7even Tech Team",
      date: "DEC 2019 - MAY 2020",
      type: "Full Time",
      description: [
        "Worked closely with international programmers, UI/UX designers, and clients to meet requirements, goals, and desired functionality on a challenging and complex Startup project.",
        "Developed the web application from initial UI design using VueJS and NuxtJS frameworks with members of a team of 4 people.",
        "Took charge of developing MVP as a team member and working overtime to ensure that it got completed by the deadline.",
      ],
    },
    {
      company: "Freelance",
      date: "JULY 2021 - PRESENT",
      type: "Full Time",
      description: [
        "Worked closely with clients to meet requirements, goals, and desired functionality.",
        "Contributed as an Open-Source developer on github.",
      ],
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="section-heading">Experiences</h2>

      {experiences.reverse().map((experience, index) => (
        <Item
          key={index}
          company={experience.company}
          date={experience.date}
          description={experience.description}
          type={experience.type}
        />
      ))}
    </div>
  );
};

export default Experiences;
