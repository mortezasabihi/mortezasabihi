import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Github } from "types";
import { getGithub } from "services";
import { AboutMe, Skills, Experiences, Educations, Projects } from "components";

type Props = {
  github: Github;
};

const Resume: NextPage<Props> = ({ github }) => {
  return (
    <>
      <Head>
        <title>{github.name} - Resume</title>
      </Head>

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
