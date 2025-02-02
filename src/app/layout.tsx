import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import 'devicon';
import './globals.css';
import '@/styles/globals.scss';

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Pascal Zhang',
  description: 'Website of Pascal Zhang',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
