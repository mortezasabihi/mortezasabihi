import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TheHeader, SocialMedia } from "components";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
      <TheHeader title="Morteza Sabihi" />

      <motion.main
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {children}
      </motion.main>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        className="fixed bottom-0 right-0 mr-14 mb-14"
      >
        <motion.a
          href="https://drive.google.com/file/d/16TNPT6-xFXFM0aCDGsjNaLH4XfAv_x7Q/view?usp=sharing"
          target="_blank"
          className="
        text-white px-5 py-2 text-lg tracking-wider border-2 border-white rounded-full hidden md:block
      "
          whileHover={{ scale: 1.3, backgroundColor: "#fff", color: "#4f46e5" }}
        >
          Get My Resume
        </motion.a>
      </motion.div>

      <footer>
        <SocialMedia />
      </footer>
    </div>
  );
};

export default Layout;
