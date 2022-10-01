import type { NextPage } from "next";
import { motion } from "framer-motion";
import Item from "./Item";
import Github from "assets/icons/github.svg";
import Linkedin from "assets/icons/linkedin.svg";
import Twitter from "assets/icons/twitter.svg";
import Instagram from "assets/icons/instagram.svg";
import Telegram from "assets/icons/telegram.svg";
import Mail from "assets/icons/mail.svg";

const SocialMedia: NextPage = () => {
  const items: { url: string; name: string; icon: any }[] = [
    {
      url: "https://github.com/mortezasabihi",
      name: "github",
      icon: <Github />,
    },
    {
      url: "https://www.linkedin.com/in/mortezasabihi",
      name: "linkedin",
      icon: <Linkedin />,
    },
    // {
    //   url: "https://twitter.com/mortezasabihi",
    //   name: "twitter",
    //   icon: <Twitter />,
    // },
    // {
    //   url: "https://www.instagram.com/mortezasabihi",
    //   name: "instagram",
    //   icon: <Instagram />,
    // },
    // {
    //   url: "https://t.me/mortezasabihi",
    //   name: "telegram",
    //   icon: <Telegram />,
    // },
    {
      url: "mailto:morteza.sabihi@gmail.com",
      name: "email",
      icon: <Mail />,
    },
  ];

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="mb-20 mx-auto"
    >
      <div className="text-center tracking-widest font-bold mb-6">
        Find me on:
      </div>

      <div className="flex items-center gap-x-6 justify-center">
        {items.map((item, index) => (
          <Item key={index} href={item.url}>
            {item.icon}
            <span className="sr-only">{item.name}</span>
          </Item>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialMedia;
