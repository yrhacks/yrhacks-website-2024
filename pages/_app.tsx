import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const router = useRouter();

  const currentPage = router.pathname;
  const currentPageName = currentPage
    .split("/")
    .pop()
    ?.replace(/\.tsx?$/, "");
  let pageTitle =
    currentPageName === "faq"
      ? "FAQ"
      : currentPageName
      ? currentPageName
          .replace(/-/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase())
      : "";

  return (
    <>
      <Head>
        <title>{`YRHacks${pageTitle ? ` - ${pageTitle}` : ""}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
