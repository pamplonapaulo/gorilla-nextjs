import * as S from './styles'

import OrderSummary from 'components/OrderSummary'
import DeliveryAddress from 'components/DeliveryAddress'

import { Order } from 'types/api'

type Props = {
  order: Order
}

const ProfileTemplate = ({ order }: Props) => {
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
            customer={order.users_permissions_user.data.attributes}
          />
        </S.Content>
      </S.FlexCenter>
    </>
  )
}

export default ProfileTemplate
