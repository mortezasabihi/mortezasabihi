import { Education } from "types";
import Item from "./Item";

const Educations = () => {
  const educations: Education[] = [
    {
      title: "Noorani poor",
      date: "2017 - 2019",
      degree: "High School Diploma, Computer Science",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="section-heading">Education</h2>

      {educations.reverse().map((education, index) => (
        <Item
          key={index}
          title={education.title}
          date={education.date}
          degree={education.degree}
        />
      ))}
    </div>
  );
};

export default Educations;
