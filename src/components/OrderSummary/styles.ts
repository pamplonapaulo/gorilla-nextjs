import styled from 'styled-components'

export const Text = styled.h1`
  color: #fbc822;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-align: left;
  text-shadow: 0px 1px 2px #000;

  span {
    font-size: 15px;
    margin: 0 3px 1px 0;
    text-transform: lowercase;
  }

  &&:nth-of-type(2) {
    white-space: nowrap;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
    text-align: unset;
  }
`

export const Snack = styled.div`
  height: 120px;
  margin-right: 25px;
`

export const Icon = styled.img`
  display: block;
  height: auto;
  width: 40px;

  @media only screen and (min-width: 1024px) {
    width: 75px;
    transition: ease-in-out 0.3s all;
  }
`

export const Quantity = styled.h1`
  text-align: center;
  background: red;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 300;
  height: 30px;
  width: 30px;
  transform: translateY(-75%);
  background: rgba(255, 255, 255, 0.85);
  border: 1px #000 solid;
  border-radius: 50%;
  color: #000;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const Prices = styled.div`
  width: 200px;
`

export const LittleText = styled.p`
  color: #ee7416;
  color: #fbc822;
  font-weight: 300;
  font-size: 1.35em;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  &&:nth-of-type(2) {
    ${LittleText} {
      margin-bottom: 0;
    }
  }
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

  ${Column} {
    ${Text} {
      margin-bottom: 2rem;
    }
  }
`
