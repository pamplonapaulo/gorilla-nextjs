import styled from 'styled-components'

export const Item = styled.div<{ isChecked?: boolean }>`
  /* margin: 0 15px; */
  margin: 0;

  /* padding: 30px; */
  padding: 15px;

  border: 1px solid;
  border-color: ${(p) =>
    p.isChecked
      ? '#fbc822'
      : p.isChecked === undefined
      ? '#fbc822'
      : 'rgba(204, 204, 204, 0.5)'};
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 260px;
  color: ${(p) =>
    p.isChecked
      ? '#fbc822'
      : p.isChecked === undefined
      ? '#fbc822'
      : 'rgba(204, 204, 204, 0.5)'};

  /* &:nth-of-type(1) {
    margin: 0 15px 0 0;
  } */

  &::after {
    background: #442f22;
    border: 3px solid #2da650;
    border-radius: 50%;
    box-shadow: black 2px 2px 5px;
    color: #2da650;
    content: '\\2713';
    display: ${(p) => (p.isChecked ? 'initial' : 'none')};
    font-size: 2rem;
    font-weight: 700;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 18px;
    transform: translateX(195%);
    text-shadow: black 2px 2px 3px;
  }

  &:nth-of-type(1) {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0 15px;
    padding: 30px;

    &:nth-of-type(1) {
      margin: 0 15px 0 0;
    }
  }
`

export const TextBigger = styled.h1`
  color: #fbc822;
  font-size: 2rem;
  font-style: italic;
  font-weight: 600;
  margin: 4rem 15px 2rem 22px;
  margin: 4rem auto;

  text-align: center;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;

  &&:nth-of-type(1) {
    margin-top: 0;

    @media only screen and (min-width: 1024px) {
      margin-top: -30px;
    }
  }

  &&:nth-of-type(5) {
    display: none;

    @media only screen and (min-width: 1024px) {
      display: flex;
    }
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
    margin: 4rem 15px 2rem 0;
    text-align: unset;
  }
`

export const Text = styled.p`
  color: inherit;
  font-size: 13px;
  line-height: 2;
  text-shadow: 0px 1px 2px #000;
  text-transform: capitalize;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }
`

export const Break = styled.br`
  display: block;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

export const Span = styled.span<{ isLowercase?: boolean }>`
  text-align: left;
  text-transform: ${(p) => (p.isLowercase ? 'lowercase' : 'capitalize')};
`

export const Em = styled.em`
  text-transform: capitalize;
  font-style: normal;
`

export const FlexCenter = styled.div`
  border-left: solid transparent 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 2rem;
  margin-left: -32px;
  overflow: visible;
  padding-left: 32px;
  text-align: left;
  width: calc(100% - 40px);
  margin-left: 0;
  padding: 0 10px;

  @media only screen and (min-width: 1024px) {
    margin-top: 100px;
    margin-left: -32px;
    padding-left: 32px;
    width: 900px;
  }

  @media only screen and (min-width: 1260px) {
    width: 1150px;
  }

  @media only screen and (min-width: 1300px) {
    width: 1260px;
  }
`

export const Content = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(28, 19, 11, 0.65);
  border: 1px solid #000;
  box-shadow: 0px 1px 3px #000;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
  transform-origin: bottom;
  transform: translateY(0%);
  height: calc(100% - 7.5vw - 80px);
  width: auto;
  margin: 0;
  padding: 10px;

  text-align: center;
  justify-content: start;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    height: unset;
    margin: unset;
    padding: 30px 30px 23px;
    text-align: unset;
    flex-flow: row nowrap;
    overflow-x: scroll;
  }

  &::-webkit-scrollbar {
    width: 1px;
    height: 7px !important;
    border: 1px solid transparent;
    margin-bottom: 3px !important;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;

    border: 1px solid transparent;
    height: 2px !important;
    width: 2px !important;
  }

  &::-webkit-scrollbar-thumb {
    background: #fbc822;
    outline: none !important;
    width: 1px !important;
    height: 2px !important;
    width: 2px !important;
    margin: 1px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.01);
    height: 2px !important;
    width: 2px !important;
  }

  &:nth-of-type(1) {
    ${Item} {
      flex-direction: column;

      display: flex;
      width: auto;

      ${Text}:nth-of-type(1) {
        margin-right: 30px;
      }

      @media only screen and (min-width: 1024px) {
        flex-direction: row;
      }
    }

    ${Item}:nth-of-type(5) {
      width: auto;

      ${Text} {
        text-transform: unset;
      }
    }
  }

  &:nth-of-type(2) {
    padding: 0;

    @media only screen and (min-width: 1024px) {
      padding: 30px 30px 23px;
    }
  }

  &:nth-of-type(5) {
    background: transparent;
    width: fit-content;
    align-self: center;
    border-color: red;
    margin: 4rem 0 3rem;

    @media only screen and (min-width: 1024px) {
      background: rgba(28, 19, 11, 0.65);
      width: 100%;
      border-color: #000;
      margin: 0 0 3rem;
    }
  }
`

export const Snack = styled.div<{ quantity: number }>`
  margin: 0 0 10%;
  width: 40%;

  @media only screen and (min-width: 1024px) {
    width: unset;
    margin: 0 30px 0 0;
  }

  &::after {
    content: '${(p) => p.quantity}';
    align-items: center;
    background: rgba(255, 255, 255, 0.85);
    border: 1px #000 solid;
    border-radius: 50%;
    color: #000;

    font-size: 13px;
    font-weight: 300;
    height: 30px;
    width: 30px;

    float: right;
    display: flex;
    justify-content: center;

    position: absolute;

    text-align: center;
    span {
      font-size: 15px;
      margin: 0 3px 1px 0;
    }

    /* transform: translate(67px, -60%); */
    transform: translateY(-50%);

    @media only screen and (min-width: 1024px) {
      transform: translate(85px, -60%);
    }
  }
`

export const Icon = styled.img`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    display: block;
    height: auto;
    width: 100px;
    transition: ease-in-out 0.3s all;
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;

  width: 150px;
  margin: 0;
  justify-content: start;
  width: unset;

  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10% 10% 0;

  @media only screen and (min-width: 1024px) {
    width: unset;
    justify-content: unset;
    flex-wrap: unset;
    padding: unset;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-of-type(1) {
    ${Column} {
      &:nth-of-type(2) {
        margin-left: 30px;
      }
    }
  }
`
