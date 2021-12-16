import type { ReactNode } from "react";
import type { NextPage } from "next";

type Props = {
  href: string;
  children: ReactNode;
};

const Item: NextPage<Props> = ({ href, children }) => {
  return (
    <a
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
              hover:bg-white
              focus:bg-white
              text-lg
              transform
              hover:scale-150
              focus:scale-150
              transition
              ease-in-out
              duration-150
            "
    >
      {children}
    </a>
  );
};

export default Item;
