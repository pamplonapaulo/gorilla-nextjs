import { useQuery } from '@apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import Loader from 'components/Loader'
import Carousel from 'components/Carousel'
import BtnArrow from 'components/BtnArrow'

import styled from 'styled-components'

const Home = () => {
  const { loading, error, data } = useQuery(GET_PACKS)

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  return (
    <>
      <FlexCenter>
        <T>{'Qual o melhor pack para você?'}</T>
        <BtnArrow
          as={'/packs/custom'}
          pathname={'/packs/custom'}
          text={'Customizar'}
        />
      </FlexCenter>
      <Carousel packs={data.packs} />
    </>
  )
}

const T = styled.h1`
  color: #fbc822;
  font-weight: 700;
  font-size: 4rem;
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 0px 1px 4px #000;
  flex-direction: column;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    /* margin: 70px 0; */
  }
`

const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  overflow: visible;
  justify-content: space-between;
  width: calc(100vw - 50px);
  margin-top: 20px;
  margin-bottom: 2rem;

  @media only screen and (min-width: 320px) {
    width: 300px;
  }

  @media only screen and (min-width: 480px) {
    width: 470px;
  }

  @media only screen and (min-width: 600px) {
    width: 520px;
  }

  @media only screen and (min-width: 768px) {
    width: 600px;
  }

  @media only screen and (min-width: 1024px) {
    width: 900px;
  }

  @media only screen and (min-width: 1260px) {
    width: 1150px;
  }

  @media only screen and (min-width: 1300px) {
    width: 1260px;
  }
`

export default Home
