import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import {ContextProvider} from "../api/connect";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Airdrop Tool</title>
      <meta name="description" content="It supports sending ERC20 tokens and ETH!" />
      
    </Head>
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
    <link rel="stylesheet" href="./globals.css"/>
  </>
}

export default MyApp
