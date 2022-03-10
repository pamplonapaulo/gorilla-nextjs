import React from 'react'

import * as S from './styles'

const OrderSummary = () => (
  <>
    <S.Row>
      <S.Column>
        <S.Text>Pack Custom</S.Text>
        <S.Items>
          <S.Snack>
            <S.Icon
              src={'https://via.placeholder.com/113x156.png/'}
              // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
              alt={'teste'}
            />
            <S.Quantity>{'5'}</S.Quantity>
          </S.Snack>
          <S.Snack>
            <S.Icon
              src={'https://via.placeholder.com/113x156.png/'}
              // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
              alt={'teste'}
            />
            <S.Quantity>{'15'}</S.Quantity>
          </S.Snack>
          <S.Snack>
            <S.Icon
              src={'https://via.placeholder.com/113x156.png/'}
              // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
              alt={'teste'}
            />
            <S.Quantity>{'5'}</S.Quantity>
          </S.Snack>
        </S.Items>
      </S.Column>
    </S.Row>

    <S.Prices>
      <S.Column>
        <S.Text>Valor do pack</S.Text>
        <S.LittleText>R$ 125,00</S.LittleText>
      </S.Column>

      <S.Column>
        <S.Text>Assinatura</S.Text>
        <S.LittleText>Trimestral</S.LittleText>
        <S.LittleText>
          <span>10% off:</span>
          <span>- R$ 12,50</span>
        </S.LittleText>
      </S.Column>
    </S.Prices>
  </>
)

export default OrderSummary
