import React, { useState, useEffect } from 'react'

import * as S from './styles'

import { initializeApollo } from 'utils/apollo'
import { GET_FREE_DELIVERY_VALUE } from 'graphql/queries'
import BtnLittle from 'components/BtnLittle'

import Brand from 'components/Brand'

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
          <S.LogoWrapper>
            <Brand />
          </S.LogoWrapper>

          <S.FlexCenter isColumn={true}>
            <S.Txt>Fretes gratuitos:</S.Txt>
            <S.Txt hasMark={true}>Rio ou Niterói</S.Txt>
            <S.Txt hasMark={true}>
              Assinaturas acima de R$ {freeDelivery} (na região Sudeste).
            </S.Txt>
          </S.FlexCenter>
          <S.FlexCenter>
            <BtnLittle text={'Entendi'} />
          </S.FlexCenter>
        </S.Wrap>
      </S.Overlay>
    </>
  )
}

export default DialogBox
