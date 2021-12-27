import { ReactNode } from "react";
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

      <main>{children}</main>

      <footer>
        <SocialMedia />
      </footer>
    </div>
  );
};

export default Layout;
