import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  color: string;
  children: ReactNode;
};

const Item = ({ label, color, children }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`w-20 h-20 flex flex-col items-center justify-center mx-auto ${
        color === "#000000" && "text-white"
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="w-8 h-8">{children}</div>

      <div className="font-bold text-sm capitalize">{label}</div>
    </motion.div>
  );
};

export default Item;
