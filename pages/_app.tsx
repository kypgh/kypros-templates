import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/utils/hooks/useTheme";
import Layout from "@/components/Layout";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kypros Templates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider>
        <main className={`${inter.className}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeProvider>
    </>
  );
}
