import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: calc(100vw - 50px);

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
    width: 900px;
  }

  @media only screen and (min-width: 1260px) {
    width: 1150px;
  }

  @media only screen and (min-width: 1300px) {
    width: 1260px;
  }

  &&:nth-of-type(2) {
    align-items: center;
    justify-content: space-between;
    overflow: visible;

    margin-top: 0;

    @media only screen and (min-width: 1024px) {
      margin-top: 25px;
    }
  }
`

export const Window = styled.div<{ moving: number }>`
  display: flex;
  flex-direction: row;
  transition: transform 0.2s ease-in;
  transform: ${(p) => 'translateX(' + p.moving + 'px)'};
`

export const Item = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 50px);
  padding: 10px;
  justify-content: space-evenly;
  height: calc(100vh - calc(50px + 70px + 58px + 50px));

  &&:nth-child(even) {
    background: rgba(28, 19, 11, 0.9);
  }

  &&:nth-child(odd) {
    background: rgba(45, 166, 80, 0.9);
  }

  @media only screen and (min-width: 320px) {
    /* height: calc(100vh - calc(50px + 70px + 58px + 50px + 4rem)); */
    width: 300px;
  }

  @media only screen and (min-width: 480px) {
    height: calc(100vh - calc(50px + 70px + 58px + 50px + 4rem));
    width: calc(470px / 2);
  }

  @media only screen and (min-width: 600px) {
    width: calc(520px / 2);
  }

  @media only screen and (min-width: 768px) {
    width: calc(600px / 2);
  }

  @media only screen and (min-width: 1024px) {
    padding: 20px 10px 10px;
    height: 550px;
    justify-content: space-around;
    width: calc(900px / 3);
  }

  @media only screen and (min-width: 1260px) {
    width: calc(1150px / 4);
  }

  @media only screen and (min-width: 1300px) {
    width: calc(1260px / 4);
  }
`

export const H = styled.h1`
  color: #ef8321;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;
  font-size: 3rem;

  text-align: center;
  font-size: 20px;

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }

  &&:nth-of-type(2) {
    //font-size: 1.3rem;
    font-size: 1.7rem;

    @media only screen and (min-width: 1024px) {
      font-size: 2.3rem;
    }
  }
`

export const Desc = styled.p`
  color: #ef8321;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;

  margin: 0;
  text-align: center;
  /* font-size: 13px; */
  font-style: italic;
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    margin: 10px;
    font-style: normal;
  }
`

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
