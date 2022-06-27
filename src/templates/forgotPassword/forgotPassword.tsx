import { useState } from 'react'
import * as S from './styles'

import axios, { AxiosResponse } from 'axios'

import BtnLittle from 'components/BtnLittle'

import { isEmailValid } from 'utils/formValidations'

const ForgotPasswordTemplate = () => {
  const [sent, setSent] = useState(false)

  const [validation, setValidation] = useState({
    email: false,
  })

  const [email, setEmail] = useState({
    email: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    setEmail({
      email: target.value,
    })

    if (!isEmailValid(target.value)) {
      setValidation({
        email: false,
      })
    }

    if (isEmailValid(target.value)) {
      setValidation({
        email: true,
      })
    }
  }

  const handleRequest = async () => {
    if (!validation.email) return
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + '/auth/forgot-password', email)
      .then((res: AxiosResponse) => {
        console.log(res)
        setSent(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <S.FlexCenter>
      <S.Content>
        <S.Column>
          {!sent && (
            <>
              <S.TextBigger>
                Para redefinir o password, digite o email e clique no botão:
              </S.TextBigger>
              <S.Content>
                <S.Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleInputChange}
                  isValid={validation.email}
                />
                <BtnLittle
                  text={'Enviar'}
                  height={'50px'}
                  dangerMode={!validation.email && null}
                  parentCallback={handleRequest}
                />
              </S.Content>
            </>
          )}
          {sent && (
            <S.TextBigger>
              Enviado! <br />
              Verifique sua caixa de mensagens e siga as instruções do email do
              Gorilla Pack. <br />
              Não deixe de verificar sua caixa de Anti-Spam e/ou Promoções.
            </S.TextBigger>
          )}
        </S.Column>
      </S.Content>
    </S.FlexCenter>
  )
}

export default ForgotPasswordTemplate
