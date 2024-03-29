import Layout from "@/components/layout";
import "@/styles/customAos.scss";
import "@/styles/globals.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <Layout>
      <Head>
        <title>Yashwanth Bharadwaj -Freelance Software Developer</title>
        <meta name="description" content="Yashwanth Bharadwaj a self-Taught web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/tomc.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
