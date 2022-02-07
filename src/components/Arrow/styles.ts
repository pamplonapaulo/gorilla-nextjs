import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;
  height: 100%;
  padding: 0;
  width: 30px;
  transform: rotate(${(props) => props.theme.direction}deg);
  transition: ease 0.2s all;

  @media only screen and (min-width: 1024px) {
    &:hover {
      transform: rotate(${(props) => props.theme.direction}deg) scale(1.2);
    }
  }
`

export const BtnBack = styled.div`
  z-index: 9;
  align-self: center;
  /* @media only screen and (min-width: 1024px) {
    align-self: unset;
  } */
`
