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

export const Item = styled.div<{ availHeight?: string }>`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 50px);
  padding: 10px;
  justify-content: space-evenly;
  height: calc(${(p) => p.availHeight} - 228px);

  &&:nth-child(even) {
    //background: rgba(239, 131, 33, 0.9);
    background: rgba(45, 166, 80, 0.9);
    box-shadow: inset 0px 0px 1px 2px #fbc822;
    color: #fbc822;

    @media only screen and (min-width: 480px) {
      background: rgba(239, 131, 33, 0.9);
      box-shadow: unset;
    }

    @media only screen and (min-width: 1024px) {
      background: rgba(28, 19, 11, 0.9);
    }
  }

  &&:nth-child(odd) {
    background: rgba(45, 166, 80, 0.9);
    box-shadow: inset 0px 0px 1px 2px #ef8321;
    color: #ef8321;

    @media only screen and (min-width: 480px) {
      box-shadow: unset;
    }
  }

  @media only screen and (min-width: 320px) {
    /* height: calc(100vh - calc(50px + 70px + 58px + 50px + 4rem)); */
    width: 300px;
  }

  @media only screen and (min-width: 480px) {
    width: calc(470px / 2);
  }

  @media only screen and (min-width: 600px) {
    height: calc(100vh - calc(50px + 70px + 58px + 50px + 4rem));
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
  color: inherit;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  text-shadow: 1px 1px 0px black;

  @media only screen and (min-width: 480px) {
    color: #47311b;
    text-shadow: unset;
  }

  @media only screen and (min-width: 1024px) {
    color: #ef8321;
    font-size: 3rem;
    text-shadow: 0px 1px 2px #000;
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
  display: none;

  @media only screen and (min-height: 590px) {
    color: #fbc822;
    display: unset;
    margin: 0;
    text-align: center;
    font-size: 14px;
    font-style: italic;
    font-weight: 600;
    text-shadow: 0px 1px 2px #000;
  }

  @media only screen and (min-width: 1024px) {
    color: #ef8321;
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
