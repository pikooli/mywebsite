import type { AppProps } from 'next/app';

import '../styles/globals.scss';
import { AppProvider } from 'src/context/AppContext';

import fontawersome from 'src/lib/fontawersome';

fontawersome();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
