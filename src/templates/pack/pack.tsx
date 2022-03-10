import * as S from './styles'

import { Pack, PackItem, Benefit } from 'types/api'

import SlugSnack from 'components/SlugSnack'
import Benefits from 'components/Benefits'

type PackData = {
  pack: Pack
  benefits: Benefit[]
}

const PackPage = ({ ...packData }: PackData) => (
  <>
    <S.T>{'Pack ' + packData.pack.attributes.Name}</S.T>
    <S.Wrapper>
      {packData.pack.attributes.Item.map((p: PackItem) => {
        return (
          <SlugSnack
            key={p.id}
            Quantity={p.Quantity}
            Name={p.product.data.attributes.Name}
            ImageFile={
              '/uploads/small_' +
              p.product.data.attributes.Image.data.attributes['hash'] +
              p.product.data.attributes.Image.data.attributes['ext']
            }
            NutritionFacts={p.product.data.attributes.NutritionFacts}
          />
        )
      })}
    </S.Wrapper>
    <S.Wrapper>
      <S.T>{packData.pack.attributes.Description}</S.T>
      <Benefits
        packBenefits={packData.pack.attributes.Benefits[0].benefits.data}
        generalBenefits={packData.benefits}
        isHome={false}
      />
    </S.Wrapper>
  </>
)

export default PackPage
