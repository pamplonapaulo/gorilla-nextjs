/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'

import { isEmailValid, postcodeMask, phoneMask } from 'utils/formValidations'

import { useOverlay } from 'contexts'

import * as S from './styles'

const FormRegister = () => {
  const [form, setForm] = useState(true)
  const [message, setMessage] = useState('')
  const [passwordAlert, setPasswordAlert] = useState(false)
  const { overlay, setOverlay } = useOverlay()

  const [validation, setValidation] = useState({
    username: true,
    postCode: true,
    phone: true,
    email: true,
    password: true,
  })

  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
    postCode: '',
    phone: '',
  })

  const handleFocusIn = (e: React.FocusEvent<HTMLInputElement>) => {
    if (window.innerWidth < 1024) {
      window.scrollTo(0, e.target.offsetTop - 75)
    }
  }

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target

    if (target.name === 'username' && target.value.length > 1) {
      setValidation({
        ...validation,
        [target.name]: true,
      })
    } else if (target.name === 'username' && target.value.length <= 1) {
      setValidation({
        ...validation,
        [target.name]: false,
      })
    }

    if (target.name === 'postCode' && inputData.postCode.length === 9) {
      setValidation({
        ...validation,
        [target.name]: true,
      })
    } else if (target.name === 'postCode' && inputData.postCode.length !== 9) {
      setValidation({
        ...validation,
        [target.name]: false,
      })
    }

    if (target.name === 'phone' && inputData.phone.length === 15) {
      setValidation({
        ...validation,
        [target.name]: true,
      })
    } else if (target.name === 'phone' && inputData.phone.length !== 15) {
      setValidation({
        ...validation,
        [target.name]: false,
      })
    }

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

    if (target.name === 'password' && target.value.length >= 8)
      setPasswordAlert(false)

    if (target.name === 'password' && target.value.length < 8)
      setPasswordAlert(true)

    if (target.name === 'postCode')
      setInputData({
        ...inputData,
        [target.name]: postcodeMask(target.value),
      })

    if (target.name === 'phone')
      setInputData({
        ...inputData,
        [target.name]: phoneMask(target.value),
      })

    if (target.name === 'email' && isEmailValid(target.value))
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })

    if (target.name === 'password' || target.name === 'username')
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })
  }

  const handleRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const errors = []

    if (
      inputData.username !== '' &&
      inputData.postCode.length === 9 &&
      inputData.phone.length === 15 &&
      inputData.email !== '' &&
      inputData.password.length >= 8
    )
      createCustomer()

    if (inputData.username === '') {
      errors.push('username')
    }

    if (inputData.postCode.length !== 9) {
      errors.push('postCode')
    }

    if (inputData.phone.length !== 15) {
      errors.push('phone')
    }

    if (inputData.email === '') {
      errors.push('email')
    }

    if (inputData.password.length < 8) {
      errors.push('password')
    }

    if (errors.length > 0) {
      let alert = {}
      errors.forEach((err) => (alert = { ...alert, [err]: false }))
      setValidation({
        ...validation,
        ...alert,
      })
      setMessage('Preencha os campos corretamente')
    }
  }

  const createCustomer = () => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + '/auth/local/register', {
        username: inputData.username,
        email: inputData.email,
        password: inputData.password,
        postCode: inputData.postCode,
        phone: inputData.phone,
      })
      .then((response: AxiosResponse<unknown>) => {
        console.log(response)
        setForm(!form)
        setTimeout(() => {
          setOverlay(!overlay)
        }, 6000)
      })
      .catch((error: { response: any }) => {
        console.error(error)
        setMessage('Erro ao registrar novo usuário.')
      })
  }

  return (
    <>
      <S.Form>
        {form && (
          <>
            <S.Field>
              <S.Legend>Cadastro</S.Legend>
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
                onFocus={handleFocusIn}
                type="text"
                name="username"
                placeholder="Nome Completo"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.username}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="text"
                name="postCode"
                placeholder="CEP"
                pattern="(\d{5})-(\d{3})"
                value={inputData.postCode}
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.postCode}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="text"
                name="phone"
                placeholder="celular"
                pattern="(\(\d{2}\))(\d{5})-(\d{4})"
                value={inputData.phone}
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.phone}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.email}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="password"
                name="password"
                placeholder="Senha"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.password}
              />
              <S.PasswordAlert isValid={passwordAlert}>
                Mínimo de 8 caracteres.
              </S.PasswordAlert>
            </S.Field>
            <S.BtnWrap>
              <Button
                parentCallback={(e) => handleRegister(e)}
                type={'button'}
                colorOne={'#facb37'}
                colorTwo={'#000'}
              >
                Gravar
              </Button>
            </S.BtnWrap>
          </>
        )}
      </S.Form>
      {!form && (
        <>
          <S.SuccessWrapper>
            <S.SuccessText>
              Enviamos um email para que você valide o seu cadastro.
            </S.SuccessText>
            <S.SuccessText>
              Se necessário, verifique o ANTI-SPAM do seu email.
            </S.SuccessText>
          </S.SuccessWrapper>
        </>
      )}
    </>
  )
}

export default FormRegister
