import styled from 'styled-components'

export const T = styled.h1`
  color: #fbc822;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 5px #000;
  margin: 100px 0 60px;

  @media only screen and (min-width: 1024px) {
    font-size: 5rem;
    margin: 300px 0 70px;
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

  &&:nth-of-type(2) {
    margin-bottom: 0.5rem;
    flex-direction: column;
    padding: 1rem;

    ${T} {
      background: #402c1c;
      text-align: center;
      font-size: 3rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 2;
      padding: 4rem;
      margin: 0 0 1rem;
      box-shadow: 2px 2px 5px #000;

      @media only screen and (min-width: 1024px) {
        font-size: 4rem;
        padding: 0 4rem;
        margin: 0;
        width: 50%;
      }
    }

    @media only screen and (min-width: 1024px) {
      flex-direction: row;
      margin-bottom: 10rem;
      padding: unset;
    }
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1159px;
    flex-direction: row;
  }
`
