import React from 'react'

import { GetStaticPaths } from 'next'

import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import { Pack, Params, PackItem, Snack, Benefit } from 'types/api'

import { replaceSpecialChars } from 'utils/replaceSpecialChars'
// import { sortBenefitsById } from 'utils/sortBenefitsById'

import styled from 'styled-components'
import SlugSnack from 'components/SlugSnack'
import PackPanel from 'components/PackPanel'
import Benefits from 'components/Benefits'

const client = new GraphQLClient(endpoint + 'graphql')

type ComplexPack = {
  pack: Pack
  currentPack: Snack[]
  benefits: Benefit[]
}

export default function Pacote({ ...complexPack }: ComplexPack) {
  return (
    <>
      <T>{'Pack ' + complexPack.pack.attributes.Name}</T>
      <Wrapper>
        {complexPack.pack.attributes.Item.map((p: PackItem) => {
          return (
            <SlugSnack
              key={p.id}
              Quantity={p.Quantity}
              Name={p.product.data.attributes.Name}
              ImageFile={
                '/uploads/small_' +
                p.product.data.attributes.Image.data.attributes['hash'] +
                p.product.data.attributes.Image.data.attributes['ext']
              }
              NutritionFacts={p.product.data.attributes.NutritionFacts}
            />
          )
        })}
      </Wrapper>
      <Wrapper>
        <T>{complexPack.pack.attributes.Description}</T>
        <Benefits
          packBenefits={complexPack.pack.attributes.Benefits[0].benefits.data}
          generalBenefits={complexPack.benefits}
          isHome={false}
        />
      </Wrapper>
      <PackPanel pack={complexPack.currentPack} />
    </>
  )
}

const T = styled.h1`
  color: #fbc822;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 5px #000;
  margin: 100px 0 60px;

  @media only screen and (min-width: 1024px) {
    font-size: 5rem;
    margin: 300px 0 70px;
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

  &&:nth-of-type(2) {
    margin-bottom: 10rem;
    flex-direction: column;

    ${T} {
      background: #402c1c;
      text-align: center;
      font-size: 3rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 2;
      padding: 4rem;
      margin: 0;
      box-shadow: 2px 2px 5px #000;

      @media only screen and (min-width: 1024px) {
        font-size: 4rem;
        padding: 0 4rem;
        width: 50%;
      }
    }

    @media only screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1159px;
    flex-direction: row;
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
  const { packs } = await client.request(GET_PACKS)

  return {
    paths: packs.data.map((p: Pack) => {
      return {
        params: {
          slug: replaceSpecialChars(p.attributes.Name),
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
    return slug === replaceSpecialChars(p.attributes.Name)
  }
  const packId = packs.data.filter(matchSlug)[0].id

  const GET_PACK = gql`
    query GET_PACK {
      pack(id: ${packId}) {
        data {
          id
          attributes {
            Name
            Description
            ExtraDiscount
            Benefits {
              id
              benefits {
                data {
                  id
                  attributes {
                    Benefit
                  }
                }
              }
            }
            Item {
              id
              Quantity
              product {
                data {
                  id
                  attributes {
                    Name
                    Image {
                      data {
                        attributes {
                          ext
                          url
                          hash
                        }
                      }
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
          }
        }
      }
      benefits {
        data {
          id
          attributes {
            Benefit
          }
        }
      }
    }
  `
  const { pack, benefits } = await client.request(GET_PACK)

  const currentPack: Snack[] = []
  pack.data.attributes.Item.map((p: PackItem) => {
    const snack = {
      id: parseInt(p.product.data.id),
      quantity: p.Quantity,
      photo:
        p.product.data.attributes.Image.data.attributes['hash'] +
        p.product.data.attributes.Image.data.attributes['ext'],
    }
    currentPack.push(snack)
  })

  const complexPack = {
    pack: { ...pack.data },
    currentPack: [...currentPack],
    benefits: [...benefits.data],
  }

  return {
    props: {
      ...complexPack,
    },
  }
}
