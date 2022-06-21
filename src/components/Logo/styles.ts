import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
  padding: 0;
  max-width: 250px;
  transform: scale(0.75);

  @media only screen and (min-width: 1024px) {
    max-width: 400px;
    transition: 0.15s transform ease-in-out;

    &:hover {
      transform: scale(0.85);
    }
  }
`
