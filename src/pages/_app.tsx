import '~/styles/global.css'

import { ChakraProvider, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}


export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  
  return (
    <>
       <Head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        <title>CONGRESS</title>
      </Head>
     <ChakraProvider theme={theme}>
        <Component {...pageProps} />
     </ChakraProvider>   
    </>
  )
}
