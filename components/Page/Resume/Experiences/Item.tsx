import { useState } from "react";
import { Experience } from "types";

type Props = Experience;

const Item = ({ company, date, type, description }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className="flex items-center mb-4 transform hover:scale-105 transition duration-300 ease-in-out"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`w-24 h-24 rounded-full items-center justify-center text-white from-green-400 to-green-500 mr-6 hidden sm:flex md:flex lg:flex xl:flex flex-col ${
          hovered ? "bg-gradient-to-r" : "bg-gradient-to-l"
        }`}
      >
        {date.split("-").map((item, index) => (
          <div key={index} className={`${index === 0 ? "mb-2" : ""}`}>
            {item}
          </div>
        ))}
      </div>

      <div className="flex-1">
        <div className="tracking-wider mb-2">
          {company} - <span className="text-xs text-gray-700">{type}</span>
        </div>

        <div>
          <p className="font-light tracking-wider text-sm">{description}</p>
        </div>

        <span className="bg-green-400 inline-block sm:hidden md:hidden lg:hidden xl:hidden py-1 px-2 text-xs rounded-lg mt-2">
          {date}
        </span>
      </div>
    </div>
  );
};

export default Item;
