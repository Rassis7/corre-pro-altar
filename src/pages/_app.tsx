import { useEffect } from "react";
import { AppProvider } from "@/shared/context";
import type { AppProps } from "next/app";
import { globalStyles } from "../../stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
