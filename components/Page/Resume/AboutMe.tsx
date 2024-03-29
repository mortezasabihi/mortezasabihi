import { Github } from "types";
import AboutText from "components/Shared/AboutText";

type Props = Pick<Github, "name">;

const AboutMe = ({ name }: Props) => {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date("2001-03-27");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="mb-8">
      <h2 className="section-heading">About Me</h2>

      <AboutText />

      <ul>
        <li className="flex items-center">
          <strong className="w-32 uppercase">Name:</strong>
          <span className="tracking-wide">{name}</span>
        </li>
        <li className="flex items-center">
          <strong className="w-32 uppercase">Age:</strong>
          <span className="tracking-wide">{calculateAge()}</span>
        </li>
        <li className="flex items-center">
          <strong className="w-32 uppercase">Email:</strong>
          <a href="mailto:morteza.sabihi@gmail.com" className="tracking-wide">
            morteza.sabihi@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
