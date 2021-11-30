import { useQuery } from '@apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import { Pack } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'
import { getPackPrice } from 'utils/getPackPrice'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import Loader from 'components/Loader'
import Btn from 'components/Btn'

import styled from 'styled-components'

const Home = () => {
  const { loading, error, data } = useQuery(GET_PACKS)

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <>
      <T>{'Selecione o seu pack'}</T>
      <Wrapper>
        {data.packs.map((p: Pack) => (
          <Item key={p.id}>
            <H>{p.Name}</H>
            <ImgWrap>
              <ImgComp
                // src={'https://via.placeholder.com/500.png/'}
                src={getImageUrl(
                  '/uploads/' + p.Image['hash'] + p.Image['ext']
                )}
                alt={p.Name}
              />
            </ImgWrap>
            <H>R$ {getPackPrice(p)} / mês</H>
            <FlexCenter>
              <Btn
                as={`/packs/${replaceSpecialChars(p.Name)}`}
                pathname={'/packs/[slug]'}
                text={'Assinar'}
              />
            </FlexCenter>
          </Item>
        ))}
        <Item>
          <H>{''}</H>
          <ImgWrap>
            <ImgComp
              // src={'https://via.placeholder.com/500.png/'}
              src={getImageUrl('/uploads/custom_a407b5b52e.png')}
              alt={'custom'}
            />
          </ImgWrap>
          <H>{'.'}</H>
          <FlexCenter>
            <Btn
              as={'/packs/custom'}
              pathname={'/packs/custom'}
              text={'Customizar'}
            />
          </FlexCenter>
        </Item>
      </Wrapper>
    </>
  )
}

const T = styled.h1`
  color: #2da650;
  font-weight: 600;
  font-size: 5rem;
  font-style: italic;
  margin: 30px 0;
  text-transform: uppercase;

  text-shadow: 0px 1px 4px #000;

  @media only screen and (min-width: 1024px) {
    margin: 70px 0;
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

  @media only screen and (min-width: 1024px) {
    max-width: 75%;
    flex-direction: row;
  }
`

const Item = styled.div`
  margin: 0 0 50px;
  text-align: center;
  max-width: 300px;
  max-height: 350px;

  @media only screen and (min-width: 1024px) {
    margin: 0 20px 50px;
  }
`

const H = styled.h1`
  color: #fbc822;
  font-weight: 600;
  font-size: 1.4rem;
  font-style: italic;
  margin-bottom: 2.5px;
  text-align: center;
  text-shadow: 0px 1px 4px #000;
  margin-top: 5px;

  &&:nth-of-type(1) {
    text-transform: uppercase;
    position: absolute;
    text-shadow: 0px 1px 4px #47311b;
    z-index: 1;

    @media only screen and (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  &&:nth-of-type(2) {
    text-align: right;

    @media only screen and (min-width: 1024px) {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }
`

const ImgWrap = styled.div`
  box-shadow: 0px 1px 5px #000;
  height: auto;
  max-width: 145px;
  width: 145px;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    max-width: 250px;
    width: 250px;
    overflow: hidden;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`

const ImgComp = styled.img`
  display: block;
  height: auto;
  max-width: 145px;
  width: 145px;

  @media only screen and (min-width: 1024px) {
    max-width: 250px;
    width: 250px;
    transition: ease-in-out 0.3s all;
  }
`

const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Home
