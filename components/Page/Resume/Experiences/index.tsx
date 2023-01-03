import Item from "./Item";
import { Experience } from "types";

const Experiences = () => {
  const experiences: Experience[] = [
    {
      company: "kamelbarchasb",
      date: "JUN 2019 - DEC 2020",
      type: "Full Time",
      description: [
        "Mentored by senior developers and the team lead.",
        "Got familiar with the team working and started coding as my first job with teammates and growing up.",
        "Built the company’s personalized ERP system in the printing labels industry called PERP.",
        "Created a custom client dashboard that reduced support tickets by 50%.",
      ],
    },
    {
      company: "Apochi.com - Your Travel Gateway To Iran",
      date: "JAN 2021 - MAY 2022",
      type: "Part Time",
      description: [
        "Managed website development project from initial design through completion and led tasks alone in the first 6 months.",
        "Cooperated closely with Backend developers, UI/UX designers, and QA and implemented over 10 main product features.",
        "Developed the website responsively, Improved the global search engine ranking by implementing Google’s Page Speed toolkit, which led to multiplied mobile users traffic and raised company revenue.",
        "Rebuilt the 10-year-old website with modern web technologies and added multi-language support, resulting in increased users satisfactions.",
      ],
    },
    {
      company: "Shakewell Agency",
      date: "JUN 2022 - SEP 2022",
      type: "Full Time",
      description: [
        "Increased the company’s clients and credibility by delivering at least 2 products and 20+ new features.",
        "Supervised the organization and preparation of 2 new employees for the company goals.",
        "Converted Figma designs to pixel-perfect and high-quality responsive frontend components.",
        "Participated as a team member to deliver high-quality MVP in a short 7 days time frame and get customer feedback.",
        "Reduced website loading time by 10% by optimizing the bundle size which leads to better user experiences.",
        "Translated design system into reusable and maintainable front-end component libraries.",
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
