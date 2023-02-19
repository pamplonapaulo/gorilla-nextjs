import React from 'react'

import * as S from './styles'

import { Benefit } from 'types/api'

type Data = {
  packBenefits: Benefit[]
  isHome: boolean
  generalBenefits: Benefit[]
}

const Benefits = ({ ...Data }: Data) => {
  const hasMatch = (benefitId: string, onThis: Benefit[]) =>
    onThis.some((a) => a.id === benefitId)

  return (
    <>
      <S.Benefits isHome={Data.isHome}>
        {Data.generalBenefits.map((b: Benefit) => (
          <S.Attribute
            key={b.id}
            isChecked={hasMatch(b.id, Data.packBenefits)}
            isHome={Data.isHome}
          >
            {b.attributes.benefit}
          </S.Attribute>
        ))}
      </S.Benefits>
    </>
  )
}

export default Benefits
