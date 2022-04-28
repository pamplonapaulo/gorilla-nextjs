import { useQuery } from '@apollo/client'
import { GET_PACKS } from 'graphql/queries'

import * as S from './styles'

import Loader from 'components/Loader'
import OrderSummary from 'components/OrderSummary'
import DeliveryAddress from 'components/DeliveryAddress'
import Billing from 'components/Billing'
import Payment from 'components/Payment'

const CheckoutTemplate = () => {
  const { data, loading, error } = useQuery(GET_PACKS)
  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Erro no carregamento dos dados</p>

  console.log(data)

  return (
    <>
      <S.FlexCenter>
        <S.Text step="1">Resumo da assinatura</S.Text>
        <S.Content>
          <OrderSummary />
        </S.Content>

        <S.Text step="2">Contato & endereço</S.Text>
        <S.Content>
          <DeliveryAddress />
        </S.Content>

        <S.Text step="3">Cupons & Fatura</S.Text>
        <S.Content>
          <Billing />
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
