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
  const [disclaimer, setDisclaimer] = useState(true)

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
      <S.Overlay isHidden={visibility} isDisplayed={display}>
        <S.Wrap isOff={visibility}>
          {isLoading && <Loader isHidden={false} />}

          {disclaimer && !isLoading && (
            <>
              {/* <S.LogoWrapper>
                <Brand />
              </S.LogoWrapper> */}

              <S.FlexCenter isColumn disclaimer>
                <S.LogoWrapper disclaimer>
                  <Brand />
                </S.LogoWrapper>

                <S.Alert>Navegação segura:</S.Alert>
                <S.Alert>
                  Para uma melhor experiência de navegação, quando você estiver
                  logado conosco seu browser armazenará por alguns minutos
                  apenas seu nome, email e chave de autenticação.
                </S.Alert>
                <S.Alert>
                  As transações financeiras aqui realizadas são operadas via
                  integração direta com plataforma independente e reconhecida
                  globalmente, dispensando a loja Gorilla Pack de todo e
                  qualquer armazenamento de dados sensíveis da sua forma de
                  pagamento.
                </S.Alert>
                <S.Alert>
                  Ao prosseguir você concorda com os termos apresentados acima.
                </S.Alert>
              </S.FlexCenter>
              <S.FlexCenter>
                <BtnLittle
                  parentCallback={() => setDisclaimer(false)}
                  text={'Concordo'}
                />
              </S.FlexCenter>
            </>
          )}
          {!disclaimer && !isLoading && (
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
                <BtnLittle parentCallback={handleTurnItOff} text={'Entendi'} />
              </S.FlexCenter>
            </>
          )}
        </S.Wrap>
      </S.Overlay>
    </>
  )
}

export default DialogBox
