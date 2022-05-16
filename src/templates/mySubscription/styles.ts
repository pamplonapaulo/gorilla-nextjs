import styled from 'styled-components'

export const TextBigger = styled.h1`
  color: #fbc822;
  font-size: 2rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  margin: 4rem 15px 2rem 22px;

  &&:nth-of-type(1) {
    /* margin: 2rem 0; */
    margin-top: -30px;
  }

  /* &&:nth-of-type(2) {
    white-space: nowrap;
  } */

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
    margin-left: 0;
  }
`

export const Text = styled.p`
  color: inherit;
  font-size: 13px;
  line-height: 2;
  text-shadow: 0px 1px 2px #000;
  text-transform: capitalize;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }
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
    display: flex;
    flex-direction: row;
    height: unset;
    margin: unset;
    padding: 30px;
    text-align: unset;
  }
`

export const Snack = styled.div`
  /* height: 120px; */
  margin-right: 30px;
`

export const Icon = styled.img`
  display: block;
  height: auto;
  width: 40px;

  @media only screen and (min-width: 1024px) {
    width: 100px;
    transition: ease-in-out 0.3s all;
  }
`

export const Quantity = styled.h1`
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  border: 1px #000 solid;
  border-radius: 50%;
  color: #000;

  font-size: 13px;
  font-weight: 300;
  height: 30px;
  width: 30px;
  transform: translateY(-75%);
  transform: translate(85px, -60%);

  float: right;
  display: flex;
  justify-content: center;

  position: absolute;

  text-align: center;
  span {
    font-size: 15px;
    margin: 0 3px 1px 0;
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;

  width: 150px;
  margin: 0;
  justify-content: start;
  width: unset;

  @media only screen and (min-width: 1024px) {
    width: unset;
    justify-content: unset;
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

export const Item = styled.div<{ isChecked?: boolean }>`
  margin: 0 15px;
  padding: 30px;
  border: 1px solid;
  border-color: ${(p) =>
    p.isChecked
      ? '#fbc822'
      : p.isChecked === undefined
      ? '#fbc822'
      : 'rgba(204, 204, 204, 0.5)'};
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 155px;
  color: ${(p) =>
    p.isChecked
      ? '#fbc822'
      : p.isChecked === undefined
      ? '#fbc822'
      : 'rgba(204, 204, 204, 0.5)'};

  &:nth-of-type(1) {
    margin: 0 15px 0 0;
  }

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
`
