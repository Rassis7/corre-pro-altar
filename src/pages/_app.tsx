import type { AppProps } from "next/app";
import { useEffect } from "react";
import { globalStyles } from "../../stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
