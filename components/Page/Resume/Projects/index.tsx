import { Project } from "types";
import Item from "./Item";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Apochi.com",
      date: "Dec 2019 - Jul 2020",
      description:
        "I developed apochi.com frontend side from scratch with Nuxt js framework.",
      url: "http://apochi.com/",
    },
    {
      title: "Wallet.ir",
      date: "Nov 2021 - Dec 2021",
      description:
        "I developed wallet.ir frontend side from scratch with Vue 3 framework.",
      url: "https://wallet.ir/",
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="section-heading">Projects</h3>

      {projects.map((project, index) => (
        <Item
          key={index}
          title={project.title}
          date={project.date}
          description={project.description}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default Projects;
