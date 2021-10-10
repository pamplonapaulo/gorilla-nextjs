import type { AppProps } from 'next/app'
import Head from 'next/head'

import { MenuProvider } from 'contexts'

import styled from 'styled-components'
import GlobalStyles from 'styles/global'

import Header from 'components/Header'
import Footer from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gorilla Pack | O snack irado de Niterói</title>
        <link rel="shortcut icon" href="/img/icon-380.png" />
        <link rel="apple-touch-icon" href="/img/icon-380.png" />
        <meta
          name="description"
          content="Gorilla Pack, O seu e-commerce favorito de bananas desidratadas"
        />
      </Head>
      <GlobalStyles />
      <MenuProvider>
        <ContainerOuter>
          <Header />
          <ContainerInner>
            <Component {...pageProps} />
          </ContainerInner>
          <Footer />
        </ContainerOuter>
      </MenuProvider>
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

export default App