import styled from 'styled-components'

export const Wrapper = styled.main`
  background: red;
  display: flex;
`

export const T = styled.h1`
  color: #fbc822;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 0px 1px 4px #000;
  flex-direction: column;
  display: flex;
  justify-content: center;

  font-size: 16px;

  @media only screen and (min-width: 1024px) {
    font-size: 4rem;
  }
`

export const FlexCenter = styled.div`
  display: flex;
  overflow: visible;
  justify-content: space-between;
  width: calc(100vw - 50px);
  margin-top: 16px;
  margin-bottom: 2rem;

  flex-direction: column;
  text-align: center;

  @media only screen and (min-width: 320px) {
    width: 300px;
  }

  @media only screen and (min-width: 480px) {
    width: 470px;
  }

  @media only screen and (min-width: 600px) {
    width: 520px;
  }

  @media only screen and (min-width: 768px) {
    width: 600px;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    text-align: left;
    width: 900px;
  }

  @media only screen and (min-width: 1260px) {
    width: 1150px;
  }

  @media only screen and (min-width: 1300px) {
    width: 1260px;
  }
`
