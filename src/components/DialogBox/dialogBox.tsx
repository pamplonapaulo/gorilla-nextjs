import React, { useState, useEffect, useCallback } from 'react'

import * as S from './styles'

import { initializeApollo } from 'utils/apollo'
import { GET_FREE_DELIVERY_VALUE } from 'graphql/queries'
import Loader from 'components/Loader'
import BtnLittle from 'components/BtnLittle'
import Brand from 'components/Brand'

const DialogBox = () => {
  const [visibility, setVisibility] = useState(false)
  const [display, setDisplay] = useState(true)
  const [freeDelivery, setFreeDelivery] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const apolloClient = initializeApollo()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleTurnItOff = () => {
    setVisibility(true)
    setTimeout(() => {
      setDisplay(false)
    }, 500)
  }

  const getFreeDeliveryValue = useCallback(async () => {
    const { data } = await apolloClient.query({
      query: GET_FREE_DELIVERY_VALUE,
    })
    setFreeDelivery(data?.freeDelivery.data.attributes.MinimumTicket)
  }, [apolloClient])

  useEffect(() => {
    if (freeDelivery === 0) getFreeDeliveryValue()
  }, [freeDelivery, getFreeDeliveryValue])

  return (
    <>
      <S.Overlay
        onClick={handleTurnItOff}
        isHidden={visibility}
        isDisplayed={display}
      >
        <S.Wrap isOff={visibility}>
          {isLoading && <Loader isHidden={false} />}

          {!isLoading && (
            <>
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
            </>
          )}
        </S.Wrap>
      </S.Overlay>
    </>
  )
}

export default DialogBox
