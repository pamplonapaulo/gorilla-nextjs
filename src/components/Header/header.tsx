import UserSection from 'components/UserSection'
import Logotype from 'components/Logotype'

import * as S from './styles'

const Header = () => (
  <S.TopBar>
    <S.Container>
      <Logotype />
      <S.Wrapper>
        <UserSection />
      </S.Wrapper>
    </S.Container>
  </S.TopBar>
)

export default Header
