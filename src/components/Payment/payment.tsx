import React, { FormEvent, useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

import * as S from './styles'

type Props = {
  months: number
  value: number
  valueWithCoupon: number | null
}

const Payment = ({ months, value, valueWithCoupon }: Props) => {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState<null | string | undefined>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      console.log('// Stripe.js has not yet loaded.')
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://gorilla.vercel.app/',
      },
    })
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  return (
    <S.Container>
      <S.Form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <S.Btn disabled={isLoading || !stripe || !elements} id="submit">
          <span id="S.Btn-text">
            {isLoading ? (
              <S.Spinner className="spinner" id="spinner"></S.Spinner>
            ) : (
              'Pagar'
            )}
          </span>
        </S.Btn>
        {message && <S.Message id="payment-message">{message}</S.Message>}
      </S.Form>
      <S.Section>
        <S.PayValue>{months}</S.PayValue>
        <S.PayValue>x</S.PayValue>
        <S.PayValue>
          R$ {valueWithCoupon ? valueWithCoupon / 100 : value / 100}
        </S.PayValue>
      </S.Section>
    </S.Container>
  )
}

export default Payment
