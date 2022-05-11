import styled from 'styled-components'

export const TopBar = styled.header`
  background: #2da650;
  height: 70px;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 9;
  box-shadow: 0px 1px 8px #000;

  @media only screen and (min-width: 1024px) {
    padding: 0 5vw;
  }
  @media only screen and (min-width: 1320px) {
    padding: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;

  @media only screen and (min-width: 1320px) {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 0 0 3rem;
  }
`
