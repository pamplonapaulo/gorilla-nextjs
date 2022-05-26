import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import FormLogin from 'components/FormLogin'
import FormRegister from 'components/FormRegister'

import CheckMark from 'components/CheckMark'
import Button from 'components/Button'
import Arrow from 'components/Arrow'
import Close from 'components/Close'

import { useUser, useOverlay } from 'contexts'

import { getFirstName } from 'utils/getFirstName'

import * as S from './styles'

const LoginOverlay = () => {
  const router = useRouter()
  const { userLog } = useUser()
  const { overlay, setOverlay } = useOverlay()

  const [register, setRegister] = useState<boolean>(false)
  const [height, setHeight] = useState<string>('0px')
  const [counter, setCounter] = useState(10)

  const handleClose = () => {
    if (register === true) setRegister(false)
    setOverlay(!overlay)
  }

  const handleRegister = () => {
    setRegister(!register)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight + 'px')
    }
  }, [])

  useEffect(() => {
    overlay === null &&
      counter >= 1 &&
      setTimeout(() => setCounter(counter - 1), 1500)

    if (overlay === null && counter === 0) {
      setOverlay(false)
      setCounter(10)
      router.push({ pathname: '/assinatura' }, '/assinatura')
    }
  }, [counter, overlay, router, setOverlay])

  return (
    <>
      {overlay === null && (
        <S.Overlay height={height}>
          <S.PopUp height={height}>
            <S.Top>
              <S.Alert>
                Você já possui um pack ativo. Deseja alterá-lo? Faça o
                cancelamento e, em seguida, contrate a nova assinatura desejada.
              </S.Alert>
            </S.Top>
            <S.Alert size={'8rem'}>{counter}</S.Alert>
            <S.Bottom>
              <S.Alert>
                Em {counter} segundos você será redirecionado para a página
                &quot;Meu Pack&quot;, onde poderá cancelar a assinatura vigente.
              </S.Alert>
            </S.Bottom>
          </S.PopUp>
        </S.Overlay>
      )}
      {overlay && (
        <S.Overlay height={height}>
          <S.PopUp height={height}>
            {userLog === 'false' && !register && (
              <>
                <S.BtnsWrapper justifyContent={'end'}>
                  <Close
                    color={'#facb37'}
                    alignSelf={'end'}
                    parentCallback={handleClose}
                  />
                </S.BtnsWrapper>
                <S.Top>
                  <FormLogin />
                </S.Top>
                <S.Bottom>
                  <S.H>Não tem cadastro?</S.H>
                  <Button
                    parentCallback={handleRegister}
                    colorOne={'#facb37'}
                    colorTwo={'#000'}
                  >
                    Cadastrar
                  </Button>
                </S.Bottom>
              </>
            )}
            {userLog === 'false' && register && (
              <>
                <S.BtnsWrapper justifyContent={'space-between'}>
                  <Arrow
                    color={'#facb37'}
                    rotate={'0'}
                    parentCallback={handleRegister}
                  />
                  <Close color={'#facb37'} parentCallback={handleClose} />
                </S.BtnsWrapper>
                <FormRegister />
              </>
            )}
            {userLog !== 'false' && (
              <>
                <S.BtnsWrapper justifyContent={'end'}>
                  <Close
                    color={'#facb37'}
                    alignSelf={'end'}
                    parentCallback={handleClose}
                  />
                </S.BtnsWrapper>
                <S.Top>
                  <S.HWrap>
                    {`Bem-vindo(a),`}
                    <br></br>
                    {getFirstName(userLog)}
                  </S.HWrap>
                  <CheckMark />
                </S.Top>
                <S.Bottom>
                  <Button
                    parentCallback={handleClose}
                    colorOne={'#facb37'}
                    colorTwo={'#000'}
                  >
                    Fechar
                  </Button>
                </S.Bottom>
              </>
            )}
          </S.PopUp>
        </S.Overlay>
      )}
    </>
  )
}

export default LoginOverlay
