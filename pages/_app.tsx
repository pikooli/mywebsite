import { useEffect } from "react";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min" as string);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
