import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { Providers } from "./providers";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const gabarito = Gabarito({ subsets: ["latin"], fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"] });

export const metadata: Metadata = {
  title: "David Cornett | Portfolio",
  description:
    "The portfolio website of David Cornett, an American developer living in Israel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="manifest" href="/pwa/manifest.json" />
      <meta name="theme-color" content="#E0E4E5" />
      <body
        className={`${gabarito.className} relative max-w-[1250px] w-full my-0 mx-auto theme`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
