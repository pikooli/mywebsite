"use client";
import type { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/globals.scss';
import { AppProvider } from 'src/context/AppContext';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J6DL506TK0'"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

          gtag('config', 'G-J6DL506TK0');
        `,
        }}
      />
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </>
  );
}

export default MyApp;
