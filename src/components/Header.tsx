import Head from 'next/head';
import Script from 'next/script';

export default function Header({ title }: { title?: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Website of Pascal Zhang" />
      <link rel="icon" href="/favicon.ico" />
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

          gtag('config', 'G-J6DL506TK0'');
        `,
        }}
      />
    </Head>
  );
}
