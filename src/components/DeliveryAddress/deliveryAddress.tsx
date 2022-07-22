import React, { useState } from 'react'

import * as S from './styles'

import { useSession } from 'next-auth/client'

import { Address, Deliveries, UserME } from 'types/api'

import handleCancellationRequest from 'utils/handleCancellationRequest'

type Delivery = {
  address: Address
  delivery: Deliveries
  customer: UserME
}

const DeliveryAddress = ({ ...delivery }: Delivery) => {
  const [session] = useSession()
  const [inputData, setInputData] = useState({
    postCode: delivery.customer.postCode,
    phone: delivery.customer.phone,
    addressNumber: delivery.customer.addressNumber
      ? delivery.customer.addressNumber
      : '',
    addressComplement: delivery.customer.addressComplement
      ? delivery.customer.addressComplement
      : '',
  })
  const [recordSuccess, setRecordSuccess] = useState(false)

  const saveChanges = () => {
    console.log('recordSuccess:', recordSuccess)
    handleCancellationRequest(
      'updateUserAndOrder',
      session?.jwt,
      setRecordSuccess,
      inputData
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    if (
      target.name === 'addressNumber' &&
      target.value.length <= 15 &&
      target.value.length >= 0
    ) {
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })
    }

    if (target.name === 'addressComplement' && target.value.length <= 15) {
      setInputData({
        ...inputData,
        [target.name]: target.value,
      })
    }
  }

  return (
    <>
      <S.Row>
        <S.Column>
          <S.Wrap>
            <S.Label>Nome</S.Label>
            <S.Input
              readOnly
              value={delivery.customer.username}
              width="300px"
            />
          </S.Wrap>

          <S.Wrap>
            <S.Label>E-mail</S.Label>
            <S.Input readOnly value={delivery.customer.email} width="300px" />
          </S.Wrap>

          <S.Wrap>
            <S.Label>Telefone</S.Label>
            <S.Input readOnly value={delivery.customer.phone} width="165px" />
          </S.Wrap>
        </S.Column>

        <S.Column>
          <S.Wrap>
            <S.Label>Logradouro</S.Label>
            <S.Input
              readOnly
              value={delivery.address.logradouro}
              width="300px"
            />
          </S.Wrap>

          <S.Row>
            <S.Wrap>
              <S.Label isInvalid={inputData.addressNumber.length === 0}>
                Número*
              </S.Label>
              <S.Input
                {...(inputData.addressNumber.length === 0 && {
                  autoFocus: true,
                })}
                type="text"
                value={inputData.addressNumber}
                name="addressNumber"
                onChange={handleInputChange}
                onBlur={saveChanges}
                isValid={inputData.addressNumber.length > 0}
                width="100px"
              />
            </S.Wrap>

            <S.Wrap>
              <S.Label>Complemento</S.Label>
              <S.Input
                type="text"
                value={inputData.addressComplement}
                name="addressComplement"
                onChange={handleInputChange}
                onBlur={saveChanges}
                isValid={true}
                width="100px"
              />
            </S.Wrap>
          </S.Row>

          <S.Row>
            <S.Wrap>
              <S.Label>Bairro</S.Label>
              <S.Input readOnly value={delivery.address.bairro} width="150px" />
            </S.Wrap>

            <S.Wrap>
              <S.Label>CEP</S.Label>
              <S.Input readOnly value={delivery.address.cep} width="120px" />
            </S.Wrap>
          </S.Row>

          <S.Row>
            <S.Wrap>
              <S.Label>Município</S.Label>
              <S.Input
                readOnly
                value={delivery.address.municipio}
                width="220px"
              />
            </S.Wrap>
            <S.Wrap>
              <S.Label>UF</S.Label>
              <S.Input readOnly value={delivery.address.uf} width="50px" />
            </S.Wrap>
          </S.Row>
        </S.Column>
      </S.Row>
      <S.Column>
        <S.Text>valor do frete</S.Text>
        <S.LittleText>R$ {delivery.delivery.fee}</S.LittleText>

        <S.Text>Entregas</S.Text>
        <S.LittleText>
          Sempre até o dia{' '}
          {delivery.delivery.expectedArrivalDays[0].date.slice(-2)}
        </S.LittleText>
      </S.Column>
    </>
  )
}

export default DeliveryAddress
