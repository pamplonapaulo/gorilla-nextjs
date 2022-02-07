import React from 'react'

import * as S from './styles'

const OrderSummary = () => (
  <>
    <S.Content isVisible={true}>
      <S.Text>Order Summary</S.Text>
      <S.Text>
        Pack:<span>Custom</span>
      </S.Text>
    </S.Content>

    <S.Content isVisible={true}>
      <S.Text>Content</S.Text>
      <S.Items>
        <S.Snack>
          <S.Icon
            src={'https://via.placeholder.com/113x156.png/'}
            // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
            alt={'teste'}
          />
          <S.Quantity>
            <span>{'x'}</span>
            {'5'}
          </S.Quantity>
        </S.Snack>
        <S.Snack>
          <S.Icon
            src={'https://via.placeholder.com/113x156.png/'}
            // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
            alt={'teste'}
          />
          <S.Quantity>
            <span>{'x'}</span>
            {'5'}
          </S.Quantity>
        </S.Snack>
        <S.Snack>
          <S.Icon
            src={'https://via.placeholder.com/113x156.png/'}
            // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
            alt={'teste'}
          />
          <S.Quantity>
            <span>{'x'}</span>
            {'5'}
          </S.Quantity>
        </S.Snack>
      </S.Items>
    </S.Content>
  </>
)

export default OrderSummary
