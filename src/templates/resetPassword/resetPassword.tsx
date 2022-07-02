import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import axios, { AxiosResponse } from 'axios'

import BtnLittle from 'components/BtnLittle'

import * as S from './styles'

const ResetPasswordTemplate = () => {
  const { query } = useRouter()
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({
    code: query.code,
    password: '',
    passwordConfirmation: '',
  })

  const [validation, setValidation] = useState({
    password: false,
    passwordConfirmation: false,
  })

  useEffect(() => {
    setValidation({
      password:
        values.password.length >= 8 && typeof values.password === 'string',
      passwordConfirmation: values.password === values.passwordConfirmation,
    })
  }, [values])

  const handleSubmit = async () => {
    console.log(values)
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + '/auth/reset-password', values)
      .then((res: AxiosResponse) => {
        console.log(res)
        console.log("Your user's password has been changed.")
        setSent(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    console.log(values)

    setValues({
      ...values,
      code: query.code,
      [target.name]: target.value,
    })
  }

  return (
    <S.FlexCenter>
      <S.Content>
        <S.Column>
          {!sent && (
            <>
              <S.TextBigger>
                Para redefinir o password, digite-o nos dois campos e clique no
                botão:
              </S.TextBigger>
              <S.Content>
                <S.Input
                  type="password"
                  name="password"
                  placeholder="Digite o Password"
                  onChange={handleInputChange}
                  isValid={validation.password}
                />
                <S.Input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirme o Password"
                  onChange={handleInputChange}
                  isValid={validation.passwordConfirmation}
                />
                <BtnLittle
                  text={'Gravar'}
                  height={'50px'}
                  dangerMode={!validation && null}
                  parentCallback={handleSubmit}
                />
              </S.Content>
            </>
          )}
          {sent && (
            <S.TextBigger>Password redefinido com sucesso!</S.TextBigger>
          )}
        </S.Column>
      </S.Content>
    </S.FlexCenter>
  )
}

export default ResetPasswordTemplate
