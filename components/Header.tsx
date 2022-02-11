import Head from "next/head";

export default function Header({ title }: { title?: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Website of Pascal Zhang" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
