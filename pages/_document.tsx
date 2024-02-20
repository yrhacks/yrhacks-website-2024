import { Html, Head, Main, NextScript } from "next/document";
export const config = { runtime: 'edge' };
export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="YRHacks - An annual hackathon run by students, for students! Available to all YRDSB high school students."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="YRHacks" />
        <meta name="copyright" content="2023 YRHacks" />

        <meta property="og:url" content="https://yrhacks.ca" />
        <meta property="og:site_name" content="YRHacks" />
        <meta property="og:title" content="YRDSB's official hackathon" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="YRHacks - An annual hackathon run by students, for students! Available to all YRDSB high school students."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/assets/logos/logo-512x512.png" />
        <meta property="og:image:alt" content="YRHacks" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="YRDSB's official hackathon" />
        <meta
          name="twitter:description"
          content="YRHacks - An annual hackathon run by students, for students! Available to all YRDSB high school students."
        />
        <meta
          name="twitter:image"
          content="https://yrdsb.ca/assets/logos/logo-512x512.png"
        />

        <meta name="theme-color" content="#20194a" />
        <meta name="msapplication-navbutton-color" content="#20194a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#20194a" />
        <meta name="msapplication-TileColor" content="#20194a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logos/logo-96x96.png" />

        <link
          rel="mask-icon"
          href="/assets/logos/logo-transparent.svg"
          color="#643dbf"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <link
          rel="preload"
          href="/assets/fonts/HelveticaNeueLTProBdEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProBdEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProBdExO.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProBlkEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProBlkExO.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProExO.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProHvEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProHvExO.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProLtEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProLtExO.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProMdEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProMdExO.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProThEx.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
        <link
          rel="preload"
          href="\assets\fonts\HelveticaNeueLTProThExO.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
