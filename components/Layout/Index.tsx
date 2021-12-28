import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TheHeader, SocialMedia } from "components";
import { Github } from "types";

type Props = {
  children: ReactNode;
  github: Github;
};

const Layout = ({ children, github }: Props) => {
  return (
    <div className="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
      <TheHeader title={github.name} />

      <motion.main
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {children}
      </motion.main>

      <footer>
        <SocialMedia />
      </footer>
    </div>
  );
};

export default Layout;
