import Logo from 'components/Logo'
import MadeInNikiti from 'components/MadeIn'

const Home = () => (
  <>
    <Logo />
    <MadeInNikiti />
  </>
)

export async function getStaticProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

export default Home
