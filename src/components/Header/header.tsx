import UserSection from 'components/UserSection'
import Logotype from 'components/Logotype'

import * as S from './styles'

const Header = () => (
  <S.TopBar>
    <Logotype />
    <S.Wrapper>
      <UserSection />
    </S.Wrapper>
  </S.TopBar>
)

export default Header
