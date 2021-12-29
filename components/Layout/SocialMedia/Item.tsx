import type { ReactNode } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";

type Props = {
  href: string;
  children: ReactNode;
};

const Item: NextPage<Props> = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-full
              text-lg
              transform
            "
      whileHover={{ scale: 1.5, backgroundColor: "white" }}
      whileFocus={{ scale: 1.5, backgroundColor: "white" }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {children}
    </motion.a>
  );
};

export default Item;
