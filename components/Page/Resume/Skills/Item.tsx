import type { ReactNode } from "react";

type Props = {
  label: string;
  color: string;
  children: ReactNode;
};

const Item = ({ label, color, children }: Props) => {
  return (
    <div
      className={`w-20 h-20 flex flex-col items-center justify-center transform hover:scale-125 transition mx-auto ${
        color === "#000000" && "text-white"
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="w-8 h-8">{children}</div>

      <div className="font-bold text-sm capitalize">{label}</div>
    </div>
  );
};

export default Item;
