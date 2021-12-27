import { Education } from "types";
import Item from "./Item";

const Educations = () => {
  const educations: Education[] = [
    {
      title: "Noorani poor",
      date: "2017 - 2019",
      degree: "High School Diploma, Computer Science",
    },
    {
      title: "Islamic Azad University, Parand Branch",
      date: "2020",
      degree: "Bachelor's degree, Computer Engineering",
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="section-heading">Education</h3>

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
