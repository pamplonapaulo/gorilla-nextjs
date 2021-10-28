import styled from 'styled-components'

export const Footage = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;

  @media (min-aspect-ratio: 16/9) {
    width: 100vw;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }

  @media only screen and (min-width: 1024px) {
    width: 100vw;
    height: auto;
  }
`
