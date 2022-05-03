import UserSection from 'components/UserSection'
import Logo from 'components/Logo'

import * as S from './styles'

const Header = () => (
  <S.TopBar>
    <S.Container>
      <Logo />
      <S.Wrapper>
        <UserSection />
      </S.Wrapper>
    </S.Container>
  </S.TopBar>
)

export default Header
