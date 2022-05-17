import * as S from './styles'

import { Order, OrderSnack } from 'types/api'

import TruckDelivery from 'components/TruckDelivery'
import Bills from 'components/Bills'
import BtnLittle from 'components/BtnLittle'

type Props = {
  order: Order
}

type Delivery = {
  date: string
}

import { formatCurrency } from 'utils/formatCurrency'

const MySubscriptionTemplate = ({ order }: Props) => {
  const convertTimestamp = (timestamp: string) => {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ]

    const formatDay = timestamp.length === 10 ? 1 : 0

    const date = {
      day: new Date(timestamp).getDate() + formatDay,
      month: months[new Date(timestamp).getMonth()],
      year: new Date(timestamp).getFullYear(),
    }
    return `${date.day}/${date.month}/${date.year}`
  }

  const buildArrayOfDates = (timestamp: string, months: number) => {
    const baseDate = new Date(timestamp)

    const allDates = [
      {
        stamp: new Date(timestamp).toISOString().substring(0, 10),
        formated: convertTimestamp(timestamp),
      },
    ]

    for (let i = 1; i < months; i++) {
      const date = new Date(baseDate.setMonth(baseDate.getMonth() + 1))
      const nextDate = {
        stamp: date.toISOString().substring(0, 10),
        formated: convertTimestamp(date.toISOString().substring(0, 10)),
      }
      allDates.push(nextDate)
    }
    return allDates
  }

  const isPast = (stamp: string) =>
    stamp < new Date().toISOString().substring(0, 10)

  return (
    <>
      <S.FlexCenter>
        <S.TextBigger>Assinatura</S.TextBigger>
        <S.Content>
          <S.Item>
            <S.Text>
              Pack: <br />
              {order.Title}
            </S.Text>
          </S.Item>

          <S.Item>
            <S.Text>
              Adesão: <br />
              {convertTimestamp(order.createdAt)}
            </S.Text>
          </S.Item>

          <S.Item>
            <S.Text>
              Contrato: <br />
              {order.period.data.attributes.Type}
            </S.Text>
          </S.Item>

          <S.Item>
            <S.Text>
              Endereço de entrega: <br />
              {order.address.logradouro}
              {order.address.numero ? ', nº' + order.address.numero : ''}
              {order.address.complemento ? ',' + order.address.complemento : ''}
              {', ' + order.address.municipio + ' - ' + order.address.uf}
              {', CEP: ' + order.address.cep}
            </S.Text>
          </S.Item>
        </S.Content>

        <S.TextBigger>Snacks</S.TextBigger>
        <S.Content>
          <S.Row>
            <S.Column>
              <S.Items>
                {order.snack.map((s: OrderSnack) => (
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
        </S.Content>

        <S.TextBigger>Entregas</S.TextBigger>
        <S.Content>
          {order.deliveries.expectedArrivalDays.map((d: Delivery) => (
            <S.Item key={d.date} isChecked={isPast(d.date)}>
              <TruckDelivery isOn={isPast(d.date)} />
              <S.Text>{convertTimestamp(d.date)}</S.Text>
            </S.Item>
          ))}
        </S.Content>

        <S.TextBigger>Pagamentos</S.TextBigger>
        <S.Content>
          {buildArrayOfDates(
            order.createdAt,
            order.expectedPayments.monthsMultiplier
          ).map((d: { stamp: string; formated: string }) => (
            <S.Item key={d.stamp} isChecked={isPast(d.stamp)}>
              <S.Text>
                R${' '}
                {formatCurrency(
                  order.expectedPayments.finalValueInCentavos / 100
                )}
              </S.Text>
              <Bills isOn={isPast(d.stamp)} />
              <S.Text>{d.formated}</S.Text>
            </S.Item>
          ))}
        </S.Content>

        <S.TextBigger>Cancelamento</S.TextBigger>
        <S.Content>
          <BtnLittle
            as={'/'}
            pathname={'/'}
            text={'Cancelar'}
            height={'50px'}
            dangerMode={true}
          />
        </S.Content>
      </S.FlexCenter>
    </>
  )
}

export default MySubscriptionTemplate
