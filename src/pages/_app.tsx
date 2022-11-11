import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import { NavBar } from "../components/NavBar";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavBar />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
