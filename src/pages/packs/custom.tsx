import React, { useState } from 'react'

// import Link from 'next/link'

import { useQuery } from '@apollo/client'
import GET_PRODUCTS from 'graphql/queries/getProducts'

import { Product } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'
// import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import Loader from 'components/Loader'
import Input from 'components/Input'
import PackPanel from 'components/PackPanel'

import styled from 'styled-components'

const Custom = () => {
  type Snack = {
    id: number
    quantity: number
    photo: string
  }
  const [customPack, setCustomPack] = useState<Snack[]>([])

  const { loading, error, data } = useQuery(GET_PRODUCTS)

  const handleSnackOnPack = (
    snackId: number,
    total: number,
    shouldIncrement: boolean,
    photoOfSnack: string
  ) => {
    const doNothing = !shouldIncrement && total == 0

    if (doNothing) return
    else {
      let pack = [...customPack]
      const snack = {
        id: snackId,
        quantity: shouldIncrement ? total + 1 : total - 1,
        photo: photoOfSnack,
      }

      if (pack.some((snk) => snk.id === snackId))
        pack = pack.filter((snk) => snk.id !== snackId)

      if (snack.quantity >= 1) pack.push(snack)

      setCustomPack([...pack])
    }
  }

  const calculatePartial = (id: string, baseValue: number) => {
    const item = customPack.filter((snk) => snk.id === Number(id))

    if (item.length > 0) {
      return 'R$' + item[0].quantity * baseValue
    } else {
      return ''
    }
  }

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  return (
    <>
      <T>{'Selecione os snacks do seu pack'}</T>
      <Wrapper>
        {data.products.map((p: Product) => {
          return (
            <Item key={p.id}>
              <H>{p.Name}</H>
              <ImgComp
                // src={'https://via.placeholder.com/363x500.png/'}
                src={getImageUrl(
                  '/uploads/small_' + p.Image1['hash'] + p.Image1['ext']
                )}
                alt={p.Name}
              />
              <H>{'R$' + p.BaseValue}</H>
              <BtnsWrapper>
                <Input
                  idOfSnack={Number(p.id)}
                  photoOfSnack={p.Image1['hash'] + p.Image1['ext']}
                  parentCallback={handleSnackOnPack}
                  scale={'1'}
                  value={0}
                />
              </BtnsWrapper>
              <Sum
                isVisible={customPack.some((snk) => snk.id === Number(p.id))}
              >
                <h1>{calculatePartial(p.id, p.BaseValue)}</h1>
              </Sum>
            </Item>
          )
        })}
      </Wrapper>
      <PackPanel pack={customPack} />
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

const Sum = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  transform: translateY(-100%);
  display: flex;
  display: ${(p) => (p.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  h1 {
    background: rgba(255, 255, 255, 0.85);
    border: 3px #000 solid;
    border-radius: 50%;
    box-shadow: 0px 1px 8px #000;
    color: #000;
    float: right;
    font-weight: 600;
    height: 125px;
    padding: 0;
    position: absolute;
    width: 125px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media only screen and (min-width: 1024px) {
      font-size: 3rem;
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

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 8;

  @media only screen and (min-width: 1024px) {
    padding: 0;
  }
`

export default Custom
