import type { NextPage } from "next";
import Item from "./Item";
import Github from "assets/icons/github.svg";
import Linkedin from "assets/icons/linkedin.svg";
import Twitter from "assets/icons/twitter.svg";
import Instagram from "assets/icons/instagram.svg";
import Telegram from "assets/icons/telegram.svg";

const SocialMedia: NextPage = () => {
  return (
    <div className="mb-20 mx-auto lg:max-w-sm">
      <div className="text-center tracking-widest font-bold mb-6">
        Find me on:
      </div>

      <div className="flex items-center justify-between">
        <Item href="https://github.com/mortezasabihi">
          <Github />
          <span className="sr-only">github</span>
        </Item>
        <Item href="https://ir.linkedin.com/in/mortezasabihi">
          <Linkedin />
          <span className="sr-only">linkedin</span>
        </Item>
        <Item href="https://twitter.com/mortezasabihi">
          <Twitter />
          <span className="sr-only">twitter</span>
        </Item>
        <Item href="https://www.instagram.com/morteza.sabihi">
          <Instagram />
          <span className="sr-only">instagram</span>
        </Item>
        <Item href="https://t.me/mortezasabihi">
          <Telegram />
          <span className="sr-only">telegram</span>
        </Item>
      </div>
    </div>
  );
};

export default SocialMedia;
