import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  color: string;
  children: ReactNode;
};

const Item = ({ label, color, children }: Props) => {
  const hexToRGBA = (hex: string, alpha: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.3,
        borderRadius: ["0%", "20%", "50%", "50%"],
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`w-20 h-20 flex flex-col items-center justify-center mx-auto cursor-default ${
        color === "#000000" && "text-white"
      }`}
      style={{ backgroundColor: hexToRGBA(color, "0.8") }}
    >
      <div className="w-8 h-8">{children}</div>

      <div className="font-bold text-sm capitalize">{label}</div>
    </motion.div>
  );
};

export default Item;
