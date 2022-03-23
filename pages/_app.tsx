import type { AppProps } from "next/app";

import "../styles/globals.scss";
import { AppProvider } from "components/AppContext";

import fontawersome from "lib/fontawersome";

fontawersome();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
