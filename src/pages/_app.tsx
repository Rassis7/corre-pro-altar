import { Error } from "@/shared";
import { useMediaQuery } from "@/shared/hooks";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { globalStyles } from "../../stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  if (isDesktop) {
    globalStyles();
    return <Error />;
  }

  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
