import * as S from './styles'

import { getImageUrl } from 'utils/getImageUrl'

import Btn from 'components/Btn'
import BtnRadio from 'components/BtnRadio'
import DeliveryCalc from 'components/DeliveryCalc'

type Snack = {
  id: number
  quantity: number
  photo: string
}

type Props = {
  pack: Snack[]
}

const PackPanel = ({ pack }: Props) => (
  <S.PackPanel isVisible={pack.length > 0}>
    <S.Content>
      <S.Text>Pack:</S.Text>
      <S.Items>
        {pack.map((s: Snack) => (
          <S.Snack key={s.id}>
            <S.Icon
              src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
              alt={'teste'}
            />
            <S.Quantity>
              <span>{'x'}</span>
              {s.quantity}
            </S.Quantity>
          </S.Snack>
        ))}
      </S.Items>
    </S.Content>
    <S.Content>
      <S.Text>Plano:</S.Text>
      <S.Items>
        <BtnRadio item={'mensal'} group={'plano'} />
        <S.HoverContent>0% off</S.HoverContent>
      </S.Items>

      <S.Items>
        <BtnRadio item={'trimestral'} group={'plano'} />
        <S.HoverContent>10% off</S.HoverContent>
      </S.Items>

      <S.Items>
        <BtnRadio item={'semestral'} group={'plano'} />
        <S.HoverContent>20% off</S.HoverContent>
      </S.Items>

      <S.Items>
        <BtnRadio item={'anual'} group={'plano'} />
        <S.HoverContent>30% off</S.HoverContent>
      </S.Items>
    </S.Content>
    <S.Content>
      <S.Text>Frete:</S.Text>
      <S.Items>
        <DeliveryCalc />
      </S.Items>
    </S.Content>
    <S.Content>
      <Btn as={'/checkout'} pathname={'/checkout'} text={'Avançar'} />
    </S.Content>
  </S.PackPanel>
)

export default PackPanel