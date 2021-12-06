import NextNProgress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo/client'

import {
  MenuProvider,
  // UserProvider,
  OverlayProvider,
  // BagOverlayProvider,
  // BagProvider,
} from 'contexts'

import styled from 'styled-components'
import GlobalStyles from 'styles/global'

import Header from 'components/Header'
// import LoginOverlay from 'components/LoginOverlay'
import VideoBg from 'components/VideoBG'
import Footer from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>Gorilla Pack | Snacks irados de Niterói</title>
          <link rel="shortcut icon" href="/img/icon-380.png" />
          <link rel="apple-touch-icon" href="/img/icon-380.png" />
          <meta
            name="description"
            content="Gorilla Pack, O seu e-commerce favorito de bananas desidratadas"
          />
        </Head>
        <GlobalStyles />
        <NextNProgress
          color="#FACB37"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <MenuProvider>
          {/* <UserProvider>
            <BagProvider> */}
          <OverlayProvider>
            {/* <BagOverlayProvider> */}
            <ContainerOuter>
              <Header />
              <ContainerInner>
                {/* <LoginOverlay /> */}
                <VideoBg />
                <ContainerExtra>
                  <Component {...pageProps} />
                </ContainerExtra>
              </ContainerInner>
              <Footer />
            </ContainerOuter>
            {/* </BagOverlayProvider> */}
          </OverlayProvider>
          {/* </BagProvider>
          </UserProvider> */}
        </MenuProvider>
      </ApolloProvider>
    </>
  )
}

const ContainerOuter = styled.div`
  color: #000f08;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 70px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 0rem;
  }
`

const ContainerInner = styled.main`
  /* background: #ef8321; */
  background: 'transparent';
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: hidden;
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  @media only screen and (min-width: 1024px) {
    height: unset;
    min-height: calc(100vh - 70px);
  }
`

const ContainerExtra = styled.div`
  align-items: center;
  background: 'transparent';
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  min-height: calc(100vh - 70px);
  /* padding-top: 70px; */
  width: 100%;
  z-index: 0;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 70px;
    /* position: absolute; */
  }
`

export default App
