import { Projects } from "../components/Projects";
import Head from "next/head";
import { ProjectsData } from "../data/ProjectsData";

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Sergio W. || Projetos</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Projects />
    </>
  );
}

export async function getStaticProps() {
  const data = ProjectsData;
  return {
    props: { data },
  };
}
