import React, { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useOverlay } from 'contexts'

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
  const router = useRouter()
  const { setOverlay } = useOverlay()

  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  const handleForgot = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOverlay(false)
    router.push({ pathname: '/forgot-password' }, '/forgot-password')
  }

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
          <S.Forgot href="forgot-password" onClick={(e) => handleForgot(e)}>
            Esqueceu a senha?
          </S.Forgot>
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
