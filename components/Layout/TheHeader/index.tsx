import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import TheNavbar from "./TheNavbar";

type Props = {
  title: string;
};

const TheHeader: NextPage<Props> = ({ title }) => {
  const variants = {
    initial: {
      scale: 0.5,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <header className="text-center  my-16">
      <Link href="/" passHref>
        <a>
          <motion.h1
            variants={variants}
            animate="animate"
            initial="initial"
            className="text-6xl text-white tracking-wide uppercase"
          >
            {title}
          </motion.h1>
        </a>
      </Link>

      <TheNavbar />
    </header>
  );
};

export default TheHeader;
