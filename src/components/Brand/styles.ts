import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
  padding: 0;
  width: 75%;

  @media only screen and (min-width: 1024px) {
    width: unset;
    max-width: 400px;
  }
`
