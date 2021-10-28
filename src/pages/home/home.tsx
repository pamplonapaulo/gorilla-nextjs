import * as S from './styles'
import Logo from 'components/Logo'
import MadeInNikiti from 'components/MadeIn'

const Home = () => (
  <>
    <S.Container>
      <Logo />
      <MadeInNikiti />
    </S.Container>
  </>
)

export async function getStaticProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

export default Home