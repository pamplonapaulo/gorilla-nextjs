import { useQuery } from '@apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import Loader from 'components/Loader'
import Carousel from 'components/Carousel'
// import Btn from 'components/Btn'

// import styled from 'styled-components'

const Home = () => {
  const { loading, error, data } = useQuery(GET_PACKS)

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  return (
    <>
      {/* <T>{'Selecione o seu pack'}</T> */}
      <Carousel packs={data.packs} />
      {/* <FlexCenter>
        <Btn
          as={'/packs/custom'}
          pathname={'/packs/custom'}
          text={'Customizar'}
        />
      </FlexCenter> */}
    </>
  )
}

// const T = styled.h1`
//   color: #2da650;
//   font-weight: 600;
//   font-size: 5rem;
//   font-style: italic;
//   margin: 30px 0;
//   text-transform: uppercase;

//   text-shadow: 0px 1px 4px #000;

//   @media only screen and (min-width: 1024px) {
//     margin: 70px 0;
//   }
// `

// const FlexCenter = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `

export default Home
