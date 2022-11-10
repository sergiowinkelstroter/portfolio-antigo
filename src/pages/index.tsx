import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

import { Skills } from "../components/Skills";
import { SectionProjects } from "../components/SectionProjects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sergio W. || Desenvolvedor Front-end</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Main />
      <About />
      <Skills />
      <SectionProjects />
      <Contact />
      <Footer />
    </div>
  );
}
