import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/Layout'
import type {AppProps} from 'next/app';
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-JTJ3EKKGK6"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JTJ3EKKGK6');`,
        }}
      />

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>)
}

export default MyApp
