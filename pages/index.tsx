import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sergio W. || Desenvolvedor Front-end</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
