import React from 'react'

import { GetStaticPaths } from 'next'

import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import { Pack, Params, PackItem, Snack } from 'types/api'

import { replaceSpecialChars } from 'utils/replaceSpecialChars'
import { sortBenefitsById } from 'utils/sortBenefitsById'

import styled from 'styled-components'
import SlugSnack from 'components/SlugSnack'
import PackPanel from 'components/PackPanel'
import Benefits from 'components/Benefits'

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
            <SlugSnack
              key={p.id}
              Quantity={p.Quantity}
              Name={p.product.Name}
              ImageFile={
                '/uploads/small_' +
                p.product.Image1['hash'] +
                p.product.Image1['ext']
              }
              NutritionFacts={p.product.NutritionFacts}
            />
          )
        })}
      </Wrapper>
      <Wrapper>
        <Benefits
          description={complexPack.pack.Description}
          benefits={sortBenefitsById(complexPack.pack.Benefits)}
        />
      </Wrapper>
      <PackPanel pack={complexPack.currentPack} />
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
    margin-top: 300px;
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

  &&:nth-of-type(2) {
    margin-bottom: 10rem;
  }

  @media only screen and (min-width: 1024px) {
    /* max-width: 75%; */
    max-width: 1159px;
    flex-direction: row;
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
        Benefits {
          benefit {
            id
            Benefit
          }
          CurrentStatus
        }
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
            NutritionFacts {
              Portion
              TotalFat
              SaturatedFat
              TransFat
              EnergeticValue
              Carbohydrates
              Sodium
              Proteins
            }
          }
        }
      }
    }
  `
  const { pack } = await client.request(GET_PACK)

  const currentPack: Snack[] = []
  pack.Item.map((p: PackItem) => {
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
