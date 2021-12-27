import { Education } from "types";
import University from "assets/icons/university.svg";

const Education = ({ date, degree, title }: Education) => {
  return (
    <div className="mb-4 transform hover:scale-105 transition duration-300 ease-in-out grid grid-cols-3 gap-4 md:flex">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-300 flex items-center justify-center rounded-md col-span-1">
        <University />
      </div>

      <div className="col-span-2">
        <div className="tracking-wider mb-2">
          {title} - <span className="text-xs text-gray-700">{date}</span>
        </div>

        <div className="font-light tracking-wider text-sm">{degree}</div>
      </div>
    </div>
  );
};

export default Education;
