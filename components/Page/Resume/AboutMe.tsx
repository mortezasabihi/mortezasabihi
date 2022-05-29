import { Github } from "types";
import AboutText from "components/Shared/AboutText";

type Props = Pick<Github, "bio" | "name" | "location">;

const AboutMe = ({ bio, name, location }: Props) => {
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
          <strong className="w-32 uppercase">Location:</strong>
          <span className="tracking-wide">{location}</span>
        </li>
        <li className="flex items-center">
          <strong className="w-32 uppercase">Email:</strong>
          <a href="mailto:mortezasabihi87@gmail.com" className="tracking-wide">
            mortezasabihi87@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
