import Item from "./Item";
import { Experience } from "types";

const Experiences = () => {
  const experiences: Experience[] = [
    {
      company: "kamelbarchasb",
      date: "JUN 2019 - DEC 2020",
      type: "Full Time",
      description: [
        "Acquired valuable skills and experience through receiving mentorship from the team during the first role.",
        "Demonstrated self-learning ability by adapting to new technologies and continuously expanding skills through training.",
        "Developed a dashboard that reduced support tickets by 50%, resulting in increased efficiency and customer satisfaction.",
        "Enhanced application reliability by debugging the technical issues, resulting in a more stable and user-friendly product.",
        "Participated in the development of the company's ERP system, for the printing labels industry, improving the organization's efficiency.",
      ],
    },
    {
      company: "Apochi.com - Your Travel Gateway To Iran",
      date: "JAN 2021 - MAY 2022",
      type: "Part Time",
      description: [
        "Led the development of Apochi from initial design through completion, independently handling tasks for the first 6 months.",
        "Collaborated closely with Back-end developers, UI/UX designers, and QA to deliver high-quality projects.",
        "Transformed Adobe XD designs into pixel-perfect web components, resulting in a visually appealing user experience.",
        "Rebuilt the 10-year-old website and added multi-language support, resulting in higher user satisfaction.",
        "Used effective communication and collaboration to contribute to cross-functional team projects and achieve successful outcomes.",
      ],
    },
    {
      company: "Shakewell Agency",
      date: "JUN 2022 - FRB 2023",
      type: "Full Time",
      description: [
        "Supervised the preparation of 2 new employees for the company's goals, resulting in successful integration into the team.",
        "Contributed to the development of an MVP that was delivered on a tight deadline and received positive customer feedback.",
        "Reduced website loading time by 10% by optimizing the bundle size which leads to better user experiences.",
        "Created interactive web animations using Framer Motion to add visual excitement to web applications.",
        "Developed a design system by converting UI Designs into reusable components, resulting in a 30% reduction in development time.",
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
