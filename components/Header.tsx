import Head from "next/head";

export default function Header({ title }: { title?: string }) {
  return (
    <Head>
      <title>{title || "Ft_linear_regression"}</title>
      <meta name="description" content="Ft_linear_regression" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
