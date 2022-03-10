import React, { useState } from 'react'
import Button from 'components/Button'

import * as S from './styles'

const Billing = () => {
  const [loading] = useState(false)

  const handleCupon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('handle cupon...')
  }

  return (
    <>
      <S.Row>
        <S.Column>
          <S.Text>Cupom</S.Text>
          <div>
            <S.Wrap>
              <S.Input width="140px" />
            </S.Wrap>
            <Button
              disabled={loading}
              parentCallback={(e) => handleCupon(e)}
              colorOne={'#facb37'}
              colorTwo={'#000'}
            >
              {loading ? <S.Loading /> : 'Validar'}
            </Button>
          </div>
        </S.Column>
      </S.Row>

      <S.Prices>
        <S.Column>
          <S.Text>Fatura detalhada</S.Text>
          <br />
          <br />
        </S.Column>

        <S.Column>
          <S.LittleText>
            <span>Pack:</span>
            <span>+ R$ 125,00</span>
          </S.LittleText>
          <S.LittleText>
            <span>Assinatura:</span>
            <span>- R$ 12,50</span>
          </S.LittleText>
          <S.LittleText>
            <span>Cupom:</span>
            <span>R$ 0,00</span>
          </S.LittleText>
          <S.LittleText>
            <span>Frete:</span>
            <span>+ R$ 55,00</span>
          </S.LittleText>
          <S.LittleText>
            <span>Total por mês:</span>
            <span>R$ 125,00</span>
          </S.LittleText>
        </S.Column>
      </S.Prices>
    </>
  )
}

export default Billing
