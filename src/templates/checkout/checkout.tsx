import * as S from './styles'

import OrderSummary from 'components/OrderSummary'
// import DeliveryAddress from 'components/DeliveryAddress'
import Billing from 'components/Billing'
import Payment from 'components/Payment'

import { Order } from 'types/api'

type Props = {
  order: Order
}

const CheckoutTemplate = ({ ...props }: Props) => {
  return (
    <>
      <S.FlexCenter>
        <S.Text step="1">Resumo da assinatura</S.Text>
        <S.Content>
          <OrderSummary
            title={props.order.Title}
            snacks={props.order.snack}
            plans={props.order.period.data}
            toPay={props.order.expectedPayments}
          />
        </S.Content>

        <S.Text step="2">Contato & endereço</S.Text>
        <S.Content>
          {/* <DeliveryAddress
            address={props.address}
            delivery={props.deliveries}
            customer={props.users_permissions_user.data.attributes}
          /> */}
        </S.Content>

        <S.Text step="3">Cupons & Fatura</S.Text>
        <S.Content>
          <Billing
            deliveryFee={props.order.deliveries.fee}
            otherValues={props.order.expectedPayments}
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
