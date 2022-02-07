import React, { useState, useEffect } from 'react'

import * as S from './styles'

import BtnLittle from 'components/BtnLittle'

import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'
const client = new GraphQLClient(endpoint + 'graphql')

const DialogBox = () => {
  const [visibility, setVisibility] = useState(false)
  const [display, setDisplay] = useState(true)
  const [freeDelivery, setFreeDelivery] = useState(0)

  const handleTurnItOff = () => {
    setVisibility(true)
    setTimeout(() => {
      setDisplay(false)
    }, 500)
  }

  const getFreeDeliveryValue = async () => {
    const GET_FREE_DELIVERY_VALUE = gql`
      query GET_FREE_DELIVERY_VALUE {
        freeDelivery {
          data {
            attributes {
              MinimumTicket
            }
          }
        }
      }
    `
    const { freeDelivery } = await client.request(GET_FREE_DELIVERY_VALUE)
    setFreeDelivery(freeDelivery.data.attributes.MinimumTicket)
  }

  useEffect(() => {
    if (freeDelivery === 0) getFreeDeliveryValue()
  }, [freeDelivery])

  return (
    <>
      <S.Overlay
        onClick={handleTurnItOff}
        isHidden={visibility}
        isDisplayed={display}
      >
        <S.Wrap isOff={visibility}>
          <S.Txt>Frete gratuito:</S.Txt>
          <S.Lista>
            <S.Item>Rio de Janeiro, RJ</S.Item>
            <S.Item>Niterói, RJ</S.Item>
            <S.Item>
              Compras acima de R$ {freeDelivery} <br />
              para toda a região Sudeste
            </S.Item>
          </S.Lista>
          <S.FlexCenter>
            <BtnLittle text={'Entendi'} />
          </S.FlexCenter>
        </S.Wrap>
      </S.Overlay>
    </>
  )
}

export default DialogBox
