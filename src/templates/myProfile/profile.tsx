import { useState, useEffect } from 'react'

import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import * as S from './styles'

import { UserME } from 'types/api'

import BtnLittle from 'components/BtnLittle'

import { postcodeMask, phoneMask } from 'utils/formValidations'
import handleCancellationRequest from 'utils/handleCancellationRequest'

type Props = {
  user?: UserME | null
}

const ProfileTemplate = ({ user }: Props) => {
  const [session] = useSession()
  const router = useRouter()
  const [hideProfile, setHideProfile] = useState(false)
  const [actionType, setActionType] = useState('')

  const [inputData, setInputData] = useState({
    postCode: user ? user.postCode : '',
    phone: user ? user.phone : '',
    addressNumber: user ? user.addressNumber : '',
    addressComplement: user ? user.addressComplement : '',
  })
  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    hideProfile &&
      countDown >= 1 &&
      setTimeout(() => setCountDown(countDown - 1), 1500)

    if (countDown === 0) {
      router.push({ pathname: '/' }, '/')
    }
  }, [countDown, hideProfile, router])

  const [validation, setValidation] = useState({
    postCode: true,
    phone: true,
    addressNumber: true,
    addressComplement: true,
  })

  const handleFocusIn = (e: React.FocusEvent<HTMLInputElement>) => {
    if (window.innerWidth < 1024) {
      window.scrollTo(0, e.target.offsetTop - 75)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    let condition

    if (target.name === 'postCode') {
      const postCode = postcodeMask(target.value)
      setInputData({
        ...inputData,
        [target.name]: postCode,
      })
      condition = postCode.length === 9 ? true : false
    }

    if (target.name === 'phone') {
      const phone = phoneMask(target.value)
      setInputData({
        ...inputData,
        [target.name]: phone,
      })
      condition = phone.length === 15 ? true : false
    }

    if (
      target.name === 'addressNumber' &&
      target.value.length <= 15 &&
      target.value.length >= 0
    ) {
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })
      condition =
        target.value.length <= 15 && target.value.length >= 1 ? true : false
    }

    if (target.name === 'addressComplement' && target.value.length <= 15) {
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })
      condition = target.value.length <= 15 ? true : false
    }

    setValidation({
      ...validation,
      [target.name]: condition,
    })
  }

  const handleUpdateCustomer = () => {
    const errors = []

    if (
      inputData.postCode.length === 9 &&
      inputData.phone.length === 15 &&
      inputData.addressNumber.length > 0 &&
      inputData.addressComplement.length <= 15
    ) {
      handleCancellationRequest(
        'updateUser',
        session?.jwt,
        setHideProfile,
        inputData
      )
      setActionType('update')
    }

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
      {!hideProfile && user && (
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
                    // onBlur={handleFocusOut}
                    isValid={validation.phone}
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
                    isValid={validation.postCode}
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
                    isValid={validation.addressNumber}
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
                    isValid={validation.addressComplement}
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
                parentCallback={handleUpdateCustomer}
              />
            </S.Content>
            <S.Content>
              <BtnLittle
                text={'Deletar'}
                height={'50px'}
                dangerMode={true}
                parentCallback={() =>
                  handleCancellationRequest(
                    'cancelUser',
                    session?.jwt,
                    setHideProfile
                  )
                }
              />
            </S.Content>
          </S.Row>
        </>
      )}
      {hideProfile && (
        <S.Content>
          <S.Row redirect={true}>
            <S.Column>
              <S.Items>
                <S.TextBigger redirect={true}>
                  {actionType === 'update'
                    ? 'Atualização efetuada'
                    : 'Cancelamento efetuado'}{' '}
                  <br /> com sucesso!
                </S.TextBigger>
              </S.Items>
            </S.Column>
            <S.Column>
              <S.Items>
                <S.TextBigger redirect={true}>
                  Redirecionando <br /> para a home... {countDown}
                </S.TextBigger>
              </S.Items>
            </S.Column>
          </S.Row>
        </S.Content>
      )}
    </S.FlexCenter>
  )
}

export default ProfileTemplate
