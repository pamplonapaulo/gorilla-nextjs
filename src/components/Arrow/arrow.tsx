import * as S from './styles'

type Props = {
  color: string
  rotate: string
}

const Arrow = ({ color, rotate = '0' }: Props) => (
  <S.Svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    theme={{ direction: rotate }}
  >
    <path
      fill={color}
      d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm189.1 129.9L123.7 264.5c-4.7-4.7-4.7-12.3 0-17l121.4-121.4c4.7-4.7 12.3-4.7 17 0l19.6 19.6c4.8 4.8 4.7 12.5-.2 17.2L211.2 230H372c6.6 0 12 5.4 12 12v28c0 6.6-5.4 12-12 12H211.2l70.3 67.1c4.9 4.7 5 12.4.2 17.2l-19.6 19.6c-4.7 4.7-12.3 4.7-17 0z"
    ></path>
  </S.Svg>
)

export default Arrow
