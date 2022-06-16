import { useState, useEffect } from 'react'

import * as S from './styles'

import { UserME } from 'types/api'

import BtnLittle from 'components/BtnLittle'

import { postcodeMask, phoneMask } from 'utils/formValidations'

type Props = {
  user?: UserME | null
}

const ProfileTemplate = ({ user }: Props) => {
  const [inputData, setInputData] = useState({
    postCode: user ? user.postCode : '',
    phone: user ? user.phone : '',
    addressNumber: user ? user.addressNumber : '',
    addressComplement: user ? user.addressComplement : '',
  })

  const [validation, setValidation] = useState({
    postCode: true,
    phone: true,
    addressNumber: true,
    addressComplement: true,
  })

  useEffect(() => {
    console.log(inputData)
  }, [inputData])

  useEffect(() => {
    console.log(validation)
  }, [validation])

  const handleFocusIn = (e: React.FocusEvent<HTMLInputElement>) => {
    if (window.innerWidth < 1024) {
      window.scrollTo(0, e.target.offsetTop - 75)
    }
  }

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target

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

    if (
      target.name === 'addressNumber' &&
      target.value.length <= 15 &&
      target.value.length >= 1
    ) {
      setValidation({
        ...validation,
        [target.name]: true,
      })
    } else if (
      (target.name === 'addressNumber' && target.value.length > 15) ||
      (target.name === 'addressNumber' && target.value.length < 1)
    ) {
      setValidation({
        ...validation,
        [target.name]: false,
      })
    }

    if (
      target.name === 'addressComplement' &&
      target.value.length <= 15 &&
      target.value.length >= 1
    ) {
      setValidation({
        ...validation,
        [target.name]: true,
      })
    } else if (
      target.name === 'addressComplement' &&
      target.value.length > 15
    ) {
      setValidation({
        ...validation,
        [target.name]: false,
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

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

    if (target.name === 'addressNumber' && target.value.length <= 15)
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })

    if (target.name === 'addressComplement' && target.value.length <= 15)
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })
  }

  const handleUpdateCustomer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const errors = []

    console.log(e)

    if (
      inputData.postCode.length === 9 &&
      inputData.phone.length === 15 &&
      inputData.addressNumber.length > 0 &&
      inputData.addressComplement.length <= 15
    )
      console.log('updateCustomer()')

    if (inputData.postCode.length !== 9) {
      errors.push('postCode')
    }

    if (inputData.phone.length !== 15) {
      errors.push('phone')
    }

    if (inputData.addressNumber === '') {
      errors.push('addressNumber')
    }

    if (inputData.addressComplement.length > 15) {
      errors.push('addressComplement')
    }

    if (errors.length > 0) {
      let alert = {}
      errors.forEach((err) => (alert = { ...alert, [err]: false }))
      setValidation({
        ...validation,
        ...alert,
      })
      console.log('Preencha os campos corretamente')
    }
  }

  return (
    <S.FlexCenter>
      {!user && <h1>Usuário inexistente</h1>}
      {user && (
        <>
          <S.TextBigger>Meu perfil</S.TextBigger>
          <S.Content>
            <S.Text>Dados não editáveis</S.Text>
            <S.Row>
              <S.Item>
                <S.Text>
                  <S.Span>Nome:</S.Span>
                  <S.Span>{user.username}</S.Span>
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>Email:</S.Span>
                  <S.Span>{user.email}</S.Span>
                </S.Text>
              </S.Item>
            </S.Row>
          </S.Content>

          <S.Content>
            <S.Text>Dados editáveis</S.Text>
            <S.Row>
              <S.Item>
                <S.Text>
                  <S.Span>Celular:</S.Span>
                  <S.Input
                    type="text"
                    value={inputData.phone}
                    name="phone"
                    pattern="(\(\d{2}\))(\d{5})-(\d{4})"
                    onChange={handleInputChange}
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                  />
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>CEP:</S.Span>
                  <S.Input
                    type="text"
                    value={inputData.postCode}
                    name="postCode"
                    pattern="(\d{5})-(\d{3})"
                    onChange={handleInputChange}
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                  />
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>Número:</S.Span>
                  <S.Input
                    type="text"
                    value={inputData.addressNumber}
                    name="addressNumber"
                    onChange={handleInputChange}
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                  />
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>Complemento:</S.Span>
                  <S.Input
                    type="text"
                    value={inputData.addressComplement}
                    name="addressComplement"
                    onChange={handleInputChange}
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                  />
                </S.Text>
              </S.Item>
            </S.Row>
          </S.Content>
          <S.Row>
            <S.Content>
              <BtnLittle
                text={'Gravar'}
                height={'50px'}
                dangerMode={false}
                noScale={true}
                parentCallback={(e) => handleUpdateCustomer(e)}
              />
            </S.Content>
            <S.Content>
              <BtnLittle
                text={'Deletar'}
                height={'50px'}
                dangerMode={true}
                parentCallback={() => console.log('DELETAR PERFIL')}
              />
            </S.Content>
          </S.Row>
        </>
      )}
    </S.FlexCenter>
  )
}

export default ProfileTemplate
