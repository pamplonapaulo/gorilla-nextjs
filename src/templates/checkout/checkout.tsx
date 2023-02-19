import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import * as S from './styles'

import OrderSummary from 'components/OrderSummary'
import DeliveryAddress from 'components/DeliveryAddress'
import Billing from 'components/Billing'
import Payment from 'components/Payment'

import { Order, UserME } from 'types/api'

type Props = {
  order?: Order[] | null
  user?: UserME
}

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)

const CheckoutTemplate = ({ order, user }: Props) => {
  const [clientSecret, setClientSecret] = useState('')

  const appearance = {
    variables: {
      colorPrimary: '#2da650',
      colorText: '#fbc822',
      borderRadius: '0',
      colorTextPlaceholder: '#e26f2a',
      colorBackground: '#442f22',
    },
    rules: {
      '.Input': {
        color: '#e26f2a',
      },
    },
  }

  const options = {
    clientSecret,
    appearance,
  }

  useEffect(() => {
    if (order && typeof order[0].attributes.paymentIntent === 'string')
      setClientSecret(order[0].attributes.paymentIntent)
  }, [order])

  return (
    <S.FlexCenter>
      {!order && <h1>Ordem inexistente</h1>}
      {order && user && (
        <>
          <S.Text step="1">Resumo da assinatura</S.Text>
          <S.Content>
            <OrderSummary
              title={order[0].attributes.Title}
              snacks={order[0].attributes.snack}
              plans={order[0].attributes.period.data}
              toPay={order[0].attributes.expectedPayments}
            />
          </S.Content>

          <S.Text step="2">Contato & endereço</S.Text>
          <S.Content>
            <DeliveryAddress
              address={order[0].attributes.address}
              delivery={order[0].attributes.deliveries}
              customer={user}
            />
          </S.Content>

          <S.Text step="3">Cupons & Fatura</S.Text>
          <S.Content>
            <Billing
              deliveryFee={order[0].attributes.deliveries.fee}
              otherValues={order[0].attributes.expectedPayments}
            />
          </S.Content>

          <S.Text step="4">Pagamento</S.Text>
          <S.Content>
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <Payment
                  months={order[0].attributes.period.data.attributes.Multiplier}
                  value={order[0].attributes.expectedPayments.finalValue}
                  valueWithCoupon={
                    order[0].attributes.expectedPayments.finalValueWithCoupon
                  }
                />
              </Elements>
            )}
          </S.Content>
        </>
      )}
    </S.FlexCenter>
  )
}

export default CheckoutTemplate
