import { useEffect } from "react";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.scss";
import fontawersome from "lib/fontawersome";

fontawersome();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min" as string);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
