import * as S from './styles'

import BtnLittle from 'components/BtnLittle'

const EmailConfirmedTemplate = () => {
  return (
    <S.FlexCenter>
      <S.Content>
        <S.Column>
          <S.TextBigger>
            Email confirmado com sucesso!
            <br />
            <br />
            Agora é só escolher seu pack!
          </S.TextBigger>
          <S.Content>
            <BtnLittle
              as={'/'}
              pathname={'/'}
              text={'Voltar'}
              height={'50px'}
              dangerMode={false}
            />
          </S.Content>
        </S.Column>
      </S.Content>
    </S.FlexCenter>
  )
}

export default EmailConfirmedTemplate
