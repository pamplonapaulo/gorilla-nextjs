import * as S from './styles'

type Props = {
  color?: string
  alignSelf?: string
  parentCallback?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Close = ({
  color = '#FFF',
  alignSelf = 'unset',
  parentCallback,
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (parentCallback) {
      parentCallback(e)
    }
  }
  return (
    <S.Circle
      color={color}
      alignSelf={alignSelf}
      onClick={(e) => handleClick(e)}
    >
      &#10006;
    </S.Circle>
  )
}

export default Close
