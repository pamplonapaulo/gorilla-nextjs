import React from 'react'

import * as S from './styles'

import { Benefit, benefit } from 'types/api'

type Data = {
  packBenefits: Benefit[]
  isHome: boolean
  generalBenefits: benefit[]
}

const Benefits = ({ ...Data }: Data) => {
  const hasMatch = (benefitId: string, onThis: Benefit[]) =>
    onThis.some((a) => a.benefit.id === benefitId)

  return (
    <>
      <S.Benefits isHome={Data.isHome}>
        {Data.generalBenefits.map((b: benefit) => (
          <S.Attribute
            key={b.id}
            isChecked={hasMatch(b.id, Data.packBenefits)}
            isHome={Data.isHome}
          >
            {b.Benefit}
          </S.Attribute>
        ))}
      </S.Benefits>
    </>
  )
}

export default Benefits
