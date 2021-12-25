import type { NextPage } from "next";
import Item from "./Item";
import Github from "assets/icons/github.svg";
import Linkedin from "assets/icons/linkedin.svg";
import Twitter from "assets/icons/twitter.svg";
import Instagram from "assets/icons/instagram.svg";
import Telegram from "assets/icons/telegram.svg";

const SocialMedia: NextPage = () => {
  return (
    <div className="mb-20 mx-auto lg:max-w-sm animate__animated animate__fadeInUp">
      <div className="text-center tracking-widest font-bold mb-6">
        Find me on:
      </div>

      <div className="flex items-center justify-between">
        <Item href="https://github.com/mortezasabihi">
          <Github />
        </Item>
        <Item href="https://ir.linkedin.com/in/mortezasabihi">
          <Linkedin />
        </Item>
        <Item href="https://twitter.com/mortezasabihi">
          <Twitter />
        </Item>
        <Item href="https://www.instagram.com/morteza.sabihi">
          <Instagram />
        </Item>
        <Item href="https://t.me/mortezasabihi">
          <Telegram />
        </Item>
      </div>
    </div>
  );
};

export default SocialMedia;
