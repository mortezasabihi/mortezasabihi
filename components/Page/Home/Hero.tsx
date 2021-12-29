import Image from "next/image";
import { Github } from "types";

type Props = Pick<Github, "avatar_url" | "bio">;

const Hero = ({ avatar_url, bio }: Props) => {
  return (
    <section className="p-12 bg-white rounded-lg shadow-2xl mb-12">
      <div className="flex flex-wrap items-center">
        <div
          className="
              w-full
              lg:w-4/12
              md:w-4/12
              mb-16
              sm:mb-16
              md:mb-0
              lg:mb-0
              xl:mb-0
              px-4
              flex
              justify-center
              md:justify-start
            "
        >
          <Image
            src={avatar_url}
            width={224}
            height={224}
            alt="avatar"
            className="mx-auto w-56 sm:w-64 md:w-full lg:w-full rounded-full"
          />
        </div>
        <div className="w-full lg:w-8/12 md:w-8/12 mb-5 px-4">
          <h2 className="text-2xl mb-4 font-bold tracking-wider">
            I&apos;m Front-end developer.
          </h2>

          <p className="leading-relaxed text-gray-900 tracking-wider font-light">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
