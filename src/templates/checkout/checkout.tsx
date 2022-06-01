import * as S from './styles'

import OrderSummary from 'components/OrderSummary'
import DeliveryAddress from 'components/DeliveryAddress'
import Billing from 'components/Billing'
import Payment from 'components/Payment'

import { Order, User } from 'types/api'

type Props = {
  order: Order
  user: User
}

const CheckoutTemplate = ({ order, user }: Props) => {
  return (
    <>
      <S.FlexCenter>
        <S.Text step="1">Resumo da assinatura</S.Text>
        <S.Content>
          <OrderSummary
            title={order.Title}
            snacks={order.snack}
            plans={order.period.data}
            toPay={order.expectedPayments}
          />
        </S.Content>

        <S.Text step="2">Contato & endereço</S.Text>
        <S.Content>
          <DeliveryAddress
            address={order.address}
            delivery={order.deliveries}
            customer={user}
          />
        </S.Content>

        <S.Text step="3">Cupons & Fatura</S.Text>
        <S.Content>
          <Billing
            deliveryFee={order.deliveries.fee}
            otherValues={order.expectedPayments}
          />
        </S.Content>

        <S.Text step="4">Pagamento</S.Text>
        <S.Content>
          <Payment />
        </S.Content>
      </S.FlexCenter>
    </>
  )
}

export default CheckoutTemplate
