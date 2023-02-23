// import React from 'react'
import { initializeApollo } from 'utils/apollo'
import { useRouter } from 'next/router'
import { GetStaticPaths } from 'next'

import { GET_PACKS, GET_SLUG, GET_PLANS, GET_BENEFITS } from 'graphql/queries'

import { Pack, Params, PackItem, Plans, Snack, Benefit } from 'types/api'

import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import PackTemplate from 'templates/pack'

import Loader from 'components/Loader'
import PackPanel from 'components/PackPanel'

const apolloClient = initializeApollo()

type ComplexPack = {
  pack: Pack
  currentPack: Snack[]
  benefits: Benefit[]
  plans: Plans[]
  id: string[]
}

const portfolio: Pack[] = []

export default function Pacote({ ...slugProps }: ComplexPack) {
  const router = useRouter()

  const pageData = {
    pack: slugProps.pack,
    benefits: slugProps.benefits,
  }

  const panelData = {
    pack: slugProps.currentPack,
    plans: slugProps.plans,
    packId: slugProps.id[0],
  }

  if (router.isFallback) {
    return <Loader isHidden={false} />
  }

  return (
    <>
      <PackTemplate {...pageData} />
      <PackPanel {...panelData} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: GET_PACKS,
  })

  return {
    paths: data.packs.data.map((p: Pack) => {
      portfolio.push(p)
      const slugString = p.id + '-' + replaceSpecialChars(p.attributes.Name)
      return {
        params: {
          slug: slugString,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params
  const regex = /(\d+)/g
  const id = slug.match(regex)

  const { data: periods } = await apolloClient.query({
    query: GET_PLANS,
  })

  const { data: benefits } = await apolloClient.query({
    query: GET_BENEFITS,
  })

  const { data: pack } = await apolloClient.query({
    query: GET_SLUG,
    variables: { id: `${id?.[0]}` },
  })

  const currentPack: Snack[] = []
  pack.pack.data?.attributes.Item.map((p: PackItem) => {
    const snack = {
      id: parseInt(p.product.data?.id),
      Quantity: p.Quantity,
      // photo: p.product.data.attributes.Name + '.png',
      photo: 'Banana.png',

      // photo:
      //   p.product.data.attributes.Image.data.attributes['hash'] +
      //   p.product.data.attributes.Image.data.attributes['ext'],
    }
    currentPack.push(snack)
  })

  const slugProps = {
    pack: { ...pack.pack.data },
    currentPack: [...currentPack],
    benefits: [...benefits.benefits.data],
    plans: [...periods.periods.data],
    id,
  }

  return {
    props: {
      ...slugProps,
    },
  }
}
