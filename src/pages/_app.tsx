import React, { useEffect, useRef } from 'react'
import NextNProgress from 'nextjs-progressbar'
import { Provider as AuthProvider } from 'next-auth/client'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'

import { PacksProvider, UserProvider, OverlayProvider } from 'contexts'

import styled from 'styled-components'
import GlobalStyles from 'styles/global'

import Header from 'components/Header'
import LoginOverlay from 'components/LoginOverlay'
import VideoBg from 'components/VideoBG'
import Footer from 'components/Footer'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)
  const pageWrap = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    pageWrap.current?.scrollTo(0, 0)
  }, [router.asPath])

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Head>
          <title>Gorilla Pack Snacks</title>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" href="/img/favicon.png" />
          <meta name="description" content="Alimentação saudável e prática." />
        </Head>
        <GlobalStyles />
        <NextNProgress
          color="#FACB37"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <PacksProvider>
          <UserProvider>
            <OverlayProvider>
              <ContainerOuter ref={pageWrap}>
                <Header />
                <ContainerInner>
                  <LoginOverlay />
                  <VideoBg />
                  <ContainerExtra>
                    <Component {...pageProps} />
                  </ContainerExtra>
                </ContainerInner>
                <Footer />
              </ContainerOuter>
            </OverlayProvider>
          </UserProvider>
        </PacksProvider>
      </ApolloProvider>
    </AuthProvider>
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
  background: 'transparent';
  display: flex;
  flex-direction: column;
  height: unset;

  /* justify-content: space-evenly; */
  justify-content: start;
  -ms-overflow-style: none;
  min-height: calc(100vh - 70px);

  overflow-y: hidden;
  position: relative;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  @media only screen and (min-width: 1024px) {
    /* min-height: 100vh; */
    justify-content: center;
    min-height: calc(100vh - 70px);
    margin-top: 70px;
  }
`

const ContainerExtra = styled.div`
  align-items: center;
  background: 'transparent';
  display: flex;
  flex-direction: column;
  height: 100%;
  /* justify-content: space-between; */

  margin: auto;
  min-height: calc(100vh - 70px);
  width: 100%;
  z-index: 0;

  -ms-overflow-style: none;
  scrollbar-width: none;

  justify-content: start;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 320px) {
    /* justify-content: unset; */
  }

  @media only screen and (min-width: 480px) {
    justify-content: unset;
  }

  @media only screen and (min-width: 1024px) {
    justify-content: center;
    /* padding-top: 70px; */
  }
`

export default App
