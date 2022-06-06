import * as S from './styles'

import OrderSummary from 'components/OrderSummary'
import DeliveryAddress from 'components/DeliveryAddress'
import Billing from 'components/Billing'
import Payment from 'components/Payment'

import { Order, UserME } from 'types/api'

type Props = {
  order: Order[] | null
  user: UserME
}

const CheckoutTemplate = ({ order, user }: Props) => {
  return (
    <>
      <S.FlexCenter>
        {order && (
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
              <Payment />
            </S.Content>
          </>
        )}
      </S.FlexCenter>
    </>
  )
}

export default CheckoutTemplate
