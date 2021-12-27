import { Project } from "types";

type Props = Project;

const Project = ({ title, date, description, url }: Props) => {
  return (
    <div className="mb-5 last-of-type:mb-0 transform hover:scale-105 transition duration-300">
      <div>
        <strong>{title}</strong>
      </div>
      <div>
        <time className="text-xs text-gray-700">{date}</time>
      </div>
      <div>
        <p className="font-light tracking-wider text-sm mb-3">{description}</p>
      </div>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="py-1 px-4 bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl"
        >
          See Project
        </a>
      </div>
    </div>
  );
};

export default Project;
