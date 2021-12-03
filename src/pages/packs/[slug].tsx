import React from 'react'

import { GetStaticPaths } from 'next'

import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import { Pack, Params, PackItem, Snack } from 'types/api'

import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import styled from 'styled-components'
// import { getImageUrl } from 'utils/getImageUrl'
import PackPanel from 'components/PackPanel'

const client = new GraphQLClient(endpoint + 'graphql')

type ComplexPack = {
  pack: Pack
  currentPack: Snack[]
}

export default function Pacote({ ...complexPack }: ComplexPack) {
  return (
    <>
      <T>{'Pack ' + complexPack.pack.Name}</T>
      <Wrapper>
        {complexPack.pack.Item.map((p: PackItem) => {
          return (
            <Item key={p.id}>
              <H>
                {p.Quantity} {p.product.Name}
              </H>
              <ImgComp
                src={'https://via.placeholder.com/363x500.png/'}
                // src={getImageUrl(
                //   '/uploads/small_' +
                //     p.product.Image1['hash'] +
                //     p.product.Image1['ext']
                // )}
                alt={p.product.Name}
              />
            </Item>
          )
        })}
      </Wrapper>
      {<PackPanel pack={complexPack.currentPack} />}
    </>
  )
}

const T = styled.h1`
  color: #fbc822;
  font-size: 5rem;
  margin: 30px 0;
  text-transform: uppercase;

  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 5px #000;

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
    /* max-width: 75%; */
    max-width: 1159px;
    flex-direction: row;
  }
`

const Item = styled.div`
  margin: 0 0 50px;
  text-align: center;
  max-width: 300px;

  @media only screen and (min-width: 1024px) {
    margin: 0 20px 150px;
  }
`

const H = styled.h1`
  margin-bottom: 2.5px;
  text-align: center;
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 5px;
  text-transform: uppercase;

  &&:nth-of-type(1) {
    color: #2da650;
    font-style: italic;
    margin-top: -30px;
    position: absolute;
    text-shadow: 0px 1px 4px #47311b;
    width: 145px;

    @media only screen and (min-width: 1024px) {
      font-size: 4rem;
      width: 250px;
    }
  }

  &&:nth-of-type(2) {
    background: rgba(187, 255, 187, 0.85);
    border-radius: 50%;
    box-shadow: 0px 1px 8px #000;
    color: #47311b;
    float: right;
    height: 75px;
    margin-top: -80px;
    padding-top: 25px;
    position: relative;
    width: 75px;

    @media only screen and (min-width: 1024px) {
      font-size: 2rem;
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
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
  const { packs } = await client.request(GET_PACKS)

  return {
    paths: packs.map((p: Pack) => {
      return {
        params: {
          slug: replaceSpecialChars(p.Name),
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params

  const { packs } = await client.request(GET_PACKS)

  function matchSlug(p: Pack) {
    return slug === replaceSpecialChars(p.Name)
  }

  const packId = packs.filter(matchSlug)[0].id

  const GET_PACK = gql`
    query GET_PACK {
      pack(id: ${packId}) {
        id
        Name
        Description
        Item {
          id
          Quantity
          product {
            id
            Name
            Image1 {
              ext
              hash
            }
          }
        }
      }
    }
  `
  const { pack } = await client.request(GET_PACK)

  const currentPack: Snack[] = []
  pack.Item.map((p: PackItem) => {
    console.log(p)
    const snack = {
      id: parseInt(p.product.id),
      quantity: p.Quantity,
      photo: p.product.Image1['hash'] + p.product.Image1['ext'],
    }
    currentPack.push(snack)
  })

  const complexPack = {
    pack: { ...pack },
    currentPack: [...currentPack],
  }

  return {
    props: {
      ...complexPack,
    },
  }
}
