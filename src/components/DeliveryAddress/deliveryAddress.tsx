import React from 'react'

import * as S from './styles'

import { Address, Deliveries, User } from 'types/api'

type Delivery = {
  address: Address
  delivery: Deliveries
  customer: User
}

const DeliveryAddress = ({ ...delivery }: Delivery) => (
  <>
    <S.Row>
      <S.Column>
        <S.Wrap>
          <S.Label>Nome</S.Label>
          <S.Input readOnly value={delivery.customer.username} width="300px" />
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
          <S.Input readOnly value={delivery.address.logradouro} width="300px" />
        </S.Wrap>

        <S.Row>
          <S.Wrap>
            <S.Label>Número</S.Label>
            <S.Input value={delivery.customer.addressNumber} width="100px" />
          </S.Wrap>

          <S.Wrap>
            <S.Label>Complemento</S.Label>
            <S.Input
              value={delivery.customer.addressComplement}
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

export default DeliveryAddress
