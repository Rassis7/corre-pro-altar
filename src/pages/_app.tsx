import { AppProvider } from "@/shared/context";
import type { AppProps } from "next/app";
import { globalStyles } from "../../stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return null;
  }

  globalStyles();
  // eslint-disable-next-line
  const AnyComponent = Component as any;
  return (
    <AppProvider>
      <AnyComponent {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
