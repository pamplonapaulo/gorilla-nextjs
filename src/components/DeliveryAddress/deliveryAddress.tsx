import React from 'react'

import * as S from './styles'

const DeliveryAddress = () => (
  <>
    <S.Row>
      <S.Column>
        <S.Wrap>
          <S.Label>Nome</S.Label>
          <S.Input readOnly value="Ronaldo Nazário Fenômeno" width="300px" />
        </S.Wrap>

        <S.Wrap>
          <S.Label>E-mail</S.Label>
          <S.Input readOnly value="emailteste@gmail.com" width="300px" />
        </S.Wrap>

        <S.Wrap>
          <S.Label>Telefone</S.Label>
          <S.Input readOnly value="(21)99999-0000" width="160px" />
        </S.Wrap>
      </S.Column>

      <S.Column>
        <S.Wrap>
          <S.Label>Logradouro</S.Label>
          <S.Input readOnly value="Av. Rio Branco" width="300px" />
        </S.Wrap>

        <S.Row>
          <S.Wrap>
            <S.Label>Número</S.Label>
            <S.Input defaultValue="69" width="100px" />
          </S.Wrap>

          <S.Wrap>
            <S.Label>Complemento</S.Label>
            <S.Input defaultValue="apt 666" width="100px" />
          </S.Wrap>
        </S.Row>

        <S.Row>
          <S.Wrap>
            <S.Label>Bairro</S.Label>
            <S.Input readOnly value="Centro" width="150px" />
          </S.Wrap>

          <S.Wrap>
            <S.Label>CEP</S.Label>
            <S.Input readOnly value="00000-000" width="120px" />
          </S.Wrap>
        </S.Row>

        <S.Row>
          <S.Wrap>
            <S.Label>Município</S.Label>
            <S.Input readOnly value="Rio de Janeiro" width="220px" />
          </S.Wrap>
          <S.Wrap>
            <S.Label>UF</S.Label>
            <S.Input readOnly value="RJ" width="50px" />
          </S.Wrap>
        </S.Row>
      </S.Column>
    </S.Row>
    <S.Column>
      <S.Text>valor do frete</S.Text>
      <S.LittleText>R$ 125,00</S.LittleText>

      <S.Text>Entregas</S.Text>
      <S.LittleText>Sempre até o dia 23</S.LittleText>
    </S.Column>
  </>
)

export default DeliveryAddress
