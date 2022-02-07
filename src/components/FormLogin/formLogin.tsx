/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { signIn } from 'next-auth/client'

import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'

import { isEmailValid } from 'utils/formValidations'

import * as S from './styles'

const FormLogin = () => {
  const [validation, setValidation] = useState({
    email: true,
    password: true,
  })

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target

    if (target.name === 'email' && isEmailValid(target.value)) {
      setValidation({
        ...validation,
        [target.name]: true,
      })
    } else if (target.name === 'email' && !isEmailValid(target.value)) {
      setValidation({
        ...validation,
        [target.name]: false,
      })
    }

    if (target.name === 'password' && target.value.length >= 8) {
      setValidation({
        ...validation,
        [target.name]: true,
      })
    } else if (target.name === 'password' && target.value.length < 8) {
      setValidation({
        ...validation,
        [target.name]: false,
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    setInputData({
      ...inputData,
      [target.name]: target.value,
    })
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const errors = []

    if (isEmailValid(inputData.email) && inputData.password.length >= 8)
      loginCustomer()

    if (isEmailValid(inputData.email) && inputData.password.length < 8) {
      errors.push('password')
      setMessage('Senha incorreta.')
    }

    if (!isEmailValid(inputData.email)) {
      errors.push('email')
      setMessage('E-mail inválido.')
    }

    if (errors.length > 0) {
      let alert = {}
      errors.forEach((err) => (alert = { ...alert, [err]: false }))
      setValidation({
        ...validation,
        ...alert,
      })
    }
  }

  // .then((response: AxiosResponse<unknown, any>) => {
  // .then((response: { data: { user: any; jwt: any } }) => {
  //   // Handle success.
  //   console.log('User profile', response.data.user)
  //   console.log('User token', response.data.jwt)
  //   setUserLog(response.data.user.username)
  // })
  // identifier: inputData.email,
  // password: inputData.password,

  // const loginCustomer = () => {
  //   axios
  //     .post(endpoint + 'api/auth/local', {
  //       identifier: 'paulo@paulo.com',
  //       password: 'paulo123',
  //     })
  //     .then((response: AxiosResponse<any, any>) => {
  //       // Handle success.
  //       console.log('User profile', response.data.user)
  //       console.log('User token', response.data.jwt)
  //       setUserLog(response.data.user.username)
  //       console.log('response', response)
  //     })
  //     .catch((err: any) => {
  //       console.log(err.response)
  //       // Handle error.
  //       // setMessage(err.response.data.message[0].messages[0].message)
  //     })
  // }

  const loginCustomer = async () => {
    setLoading(true)
    const result = await signIn('credentials', {
      ...inputData,
      redirect: false,
      callbackUrl: '/',
    })

    if (result?.error) {
      setLoading(false)
      console.error(result?.error)
      setMessage(result?.error)
    }
  }

  return (
    <>
      <S.Form>
        <S.Field>
          <S.Legend>ÁREA DO CLIENTE</S.Legend>
          {message !== '' && (
            <ErrorMessage
              bottom={'unset'}
              bottomMobile={'unset'}
              topMobile={'58px'}
            >
              {message}
            </ErrorMessage>
          )}
          <S.Input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            onBlur={handleFocusOut}
            isValid={validation.email}
          />
          <S.Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleInputChange}
            onBlur={handleFocusOut}
            isValid={validation.password}
          />
          <S.Forgot href="#">Esqueceu a senha?</S.Forgot>
        </S.Field>
      </S.Form>
      <div>
        <Button
          disabled={loading}
          parentCallback={(e) => handleLogin(e)}
          colorOne={'#facb37'}
          colorTwo={'#000'}
        >
          {loading ? <S.Loading /> : 'Entrar'}
        </Button>
      </div>
    </>
  )
}

export default FormLogin
