import * as S from './styles'

import { UserME, Order, OrderSnack } from 'types/api'

import TruckDelivery from 'components/TruckDelivery'
import Bills from 'components/Bills'
import BtnLittle from 'components/BtnLittle'

type Props = {
  order: Order[] | null
  user: UserME
}

type Delivery = {
  date: string
}

import { formatCurrency } from 'utils/formatCurrency'

const MySubscriptionTemplate = ({ order, user }: Props) => {
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
        {order && (
          <>
            <S.TextBigger>Assinatura</S.TextBigger>
            <S.Content>
              <S.Item>
                <S.Text>
                  <S.Span>Pack: {order[0].attributes.Title}</S.Span>
                  <S.Span>
                    Contrato: {order[0].attributes.period.data.attributes.Type}
                  </S.Span>
                  <S.Span>
                    Adesão: {convertTimestamp(order[0].attributes.createdAt)}
                  </S.Span>
                </S.Text>
                <S.Text>
                  <S.Span>Contratante: {user.username}</S.Span>

                  <S.Span>Telefone: {user.phone} </S.Span>
                  <S.Span isLowercase={true}>
                    <S.Em>Email: </S.Em>
                    {user.email}
                  </S.Span>
                </S.Text>
              </S.Item>

              <S.Item>
                <S.Text>
                  <S.Span>
                    Logradouro: <S.Break />
                    {order[0].attributes.address.logradouro}
                  </S.Span>
                  <S.Span>Nº: {order[0].attributes.address.numero}</S.Span>
                  <S.Span>
                    Complemento: {order[0].attributes.address.complemento}
                  </S.Span>
                </S.Text>

                <S.Text>
                  <S.Span>Bairro: {order[0].attributes.address.bairro}</S.Span>
                  <S.Span>
                    {order[0].attributes.address.municipio +
                      ' - ' +
                      order[0].attributes.address.uf}
                  </S.Span>
                  <S.Span>{'CEP: ' + order[0].attributes.address.cep}</S.Span>
                </S.Text>
              </S.Item>
            </S.Content>

            <S.TextBigger>Snacks</S.TextBigger>
            <S.Content>
              <S.Row>
                <S.Column>
                  <S.Items>
                    {order[0].attributes.snack.map((s: OrderSnack) => (
                      <S.Snack key={s.product.data.id} quantity={s.Quantity}>
                        <S.Icon
                          src={`https://via.placeholder.com/113x156/CCC/00000?text=${s.product.data.attributes.Name}`}
                          // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
                          alt={s.product.data.attributes.Name}
                        />
                      </S.Snack>
                    ))}
                  </S.Items>
                </S.Column>
              </S.Row>
            </S.Content>

            <S.TextBigger>Entregas</S.TextBigger>
            <S.Content>
              {order[0].attributes.deliveries.expectedArrivalDays.map(
                (d: Delivery) => (
                  <S.Item key={d.date} isChecked={isPast(d.date)}>
                    <TruckDelivery isOn={isPast(d.date)} />
                    <S.Text>{convertTimestamp(d.date)}</S.Text>
                  </S.Item>
                )
              )}
            </S.Content>

            <S.TextBigger>Cobranças</S.TextBigger>
            <S.Content>
              {buildArrayOfDates(
                order[0].attributes.createdAt,
                order[0].attributes.expectedPayments.monthsMultiplier
              ).map((d: { stamp: string; formated: string }) => (
                <S.Item key={d.stamp} isChecked={isPast(d.stamp)}>
                  <S.Text>
                    R${' '}
                    {formatCurrency(
                      order[0].attributes.expectedPayments
                        .finalValueInCentavos / 100
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
          </>
        )}
      </S.FlexCenter>
    </>
  )
}

export default MySubscriptionTemplate
