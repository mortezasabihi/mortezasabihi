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
        "Managed website development project from initial design through completion using Vue.js and Nuxt.js frameworks, optimizing all cross-browser and multi-platform compatibility, and leading tasks alone in the first 6 months",
        "Designed and prepared end-to-end product features in collaboration with UI/UX designers and stakeholders that enhanced performance by up to 80%.",
        "Made website pages SEO Friendly by developing in SSR mode, adding required meta tags, applying JSON-LD, reducing image size, and lazy-loading.",
        "Used SCSS pre-processor for styling the project with BEM naming methodology and structuring files with 7-1 pattern.",
        "Added multi-language support with i18n library."
      ],
    },
    {
      company: "7even Tech",
      date: "SEP 2020 - MAY 2022",
      type: "Full Time",
      description: [
        "Collaborated closely with international programmers teams, UI/UX designers, and clients to meet requirements, goals, and suitable functionality on a challenging and complex Startup project.",
        "Developed the web application from initial UI design using Vue.js and NuxtJS frameworks with members of a team of 4 people.",
        "Translating UI designs to maintainable code with clean code architecture and connecting to backend service using Rest API.",
        "Took charge of developing MVP as a team member and working overtime to ensure that it got completed by the deadline.",
        "Updated the project Vue.js version from 2 to 3 along with typescript and used composable functions to create reusable code."
      ],
    },
    {
      company: "Shakewell Agency",
      date: "JUN 2022 - SEP 2022",
      type: "Full Time",
      description: [
        "Translated UI designs to actual code by working closely with UI/UX designers and asking them to design every page with different statuses and a complete design system. Coded the entire design system and pages with TailwindCSS, Next.js, and Typescript.",
        "Delivered at least 2 React.js Web UI projects with cross-browser compatible pages using the latest web technologies.",
        "Communicated with the team to meet the client's requirements, goals, and desired functionality. Had meetings with the Manager to solve the project issues.",
        "Had a chance to manage a project and create tickets for the project.",
        "Coded Next.js typescript web application with a clean structure. Architected a scalable, reliable, and reusable Next.js boilerplate for the company to speed up development for future projects.",
        "Used HLS protocol to build a video streaming web application with full support for all kinds of devices.",
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
