import React from 'react'

import * as S from './styles'

import { OrderSnack, Plans, ExpectedPayments } from 'types/api'

type Summary = {
  title: string
  snacks: OrderSnack[]
  plans: Plans
  toPay: ExpectedPayments
}

const OrderSummary = ({ ...summary }: Summary) => (
  <>
    <S.Row>
      <S.Column>
        <S.Text>Pack: {summary.title}</S.Text>
        <S.Items>
          {summary.snacks?.map((s: OrderSnack) => (
            <S.Snack key={s.product.data.id}>
              <S.Icon
                src={`https://via.placeholder.com/113x156/CCC/00000?text=${s.product.data.attributes.Name}`}
                // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
                alt={s.product.data.attributes.Name}
              />
              <S.Quantity>{s.Quantity}</S.Quantity>
            </S.Snack>
          ))}
        </S.Items>
      </S.Column>
    </S.Row>
    <S.Prices>
      <S.Column>
        <S.Text>Valor do pack</S.Text>
        <S.LittleText>
          <span>
            R${' '}
            {summary.toPay?.finalValue
              ? summary.toPay?.finalValue / 100
              : 'erro'}
          </span>

          <span>
            {summary.toPay?.monthsMultiplier === 1
              ? ' (recorrente)'
              : ' x ' + summary.toPay?.monthsMultiplier}
          </span>
        </S.LittleText>
      </S.Column>

      <S.Column>
        <S.Text>Assinatura</S.Text>
        <S.LittleText>{summary.plans?.attributes.Type}</S.LittleText>
        <S.LittleText>
          <span>
            {summary.plans?.attributes.Discount
              ? summary.plans?.attributes.Discount * 10
              : ''}
            0% off
          </span>
          <span>- R$ {summary.toPay.absoluteDiscountApplied}</span>
        </S.LittleText>
      </S.Column>
    </S.Prices>
  </>
)

export default OrderSummary
