import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
