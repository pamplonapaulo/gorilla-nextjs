import React, { useState, useEffect } from 'react'

import * as S from './styles'

import { initializeApollo } from 'utils/apollo'
import { GET_FREE_DELIVERY_VALUE } from 'graphql/queries'
import BtnLittle from 'components/BtnLittle'

const apolloClient = initializeApollo()

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
    const { data } = await apolloClient.query({
      query: GET_FREE_DELIVERY_VALUE,
    })
    console.log(data)
    setFreeDelivery(data?.freeDelivery.data.attributes.MinimumTicket)
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
