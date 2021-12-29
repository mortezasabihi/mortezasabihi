import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Github } from "types";
import { getGithub } from "services";
import { AboutMe, Skills, Experiences, Educations, Projects } from "components";

type Props = {
  github: Github;
};

const Resume: NextPage<Props> = ({ github }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{github.name} - Resume</title>
        <meta name="author" content="Morteza Sabihi" />
        <meta name="keywords" content="Morteza Sabihi, مرتضی صبیحی" />
        <meta name="theme-color" content="#4f46e5" />
        <meta property="og:title" name="og:title" content={github.name} />
        <meta
          property="og:url"
          name="og:url"
          content="https://mortezasabihi.com/resume"
        />
        <meta property="og:type" name="og:type" content="website" key="type" />
        <meta property="og:image" name="og:image" content={github.avatar_url} />
        <meta
          property="og:image:type"
          name="og:image:type"
          content="image/png"
        />
        <meta
          property="og:description"
          name="og:description"
          content="Morteza Sabihi's personal resume"
          key="description"
        />
        <meta
          property="twitter:title"
          name="twitter:title"
          content={github.name}
        />
        <meta
          property="twitter:image"
          name="twitter:image"
          content={github.avatar_url}
        />
        <meta
          property="twitter:description"
          name="twitter:description"
          content="Morteza Sabihi's personal resume"
        />
        <meta property="twitter:card" name="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          name="twitter:site"
          content="@mortezasabihi"
        />
        <meta itemProp="name" content={github.name} />
        <meta
          itemProp="description"
          content="Morteza Sabihi's personal resume"
        />
        <link rel="canonical" href="https://mortezasabihi.com/resume" />
      </Head>

      {router.pathname === "/resume" && (
        <a
          download
          href="/Resume.pdf"
          target="_blank"
          className="
          text-white
          mb-10
          px-5
          py-2
          text-lg
          tracking-wider
          border-2 border-white
          rounded-full
          hover:bg-white hover:text-indigo-600
          transition
          transform
          hover:scale-110
          block
          md:hidden
          text-center
        "
        >
          Get My Resume
        </a>
      )}

      <section className="bg-white p-12 rounded-lg mb-12">
        <AboutMe
          bio={github.bio}
          name={github.name}
          location={github.location}
        />

        <Skills />

        <Experiences />

        <Educations />

        <Projects />
      </section>
    </>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getGithub();

  return {
    props: {
      github: data,
    },
  };
};
