import styled from 'styled-components'

type ContentType = {
  isVisible: boolean
  showOnMobile?: boolean
}

export const Text = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  margin-bottom: 2rem;

  @media only screen and (min-width: 1024px) {
    &&:first-child {
      &&::after {
        content: ':';
      }
    }
  }

  span {
    font-size: 15px;
    margin: 0 3px 1px 0;
    text-transform: lowercase;
  }

  &&:nth-of-type(2) {
    color: #fff;
    white-space: nowrap;
  }
`

export const Snack = styled.div`
  height: 120px;
  margin-right: 25px;
`

export const Icon = styled.img`
  display: block;
  height: auto;
  width: 50px;

  @media only screen and (min-width: 1024px) {
    width: 75px;
    transition: ease-in-out 0.3s all;
  }
`

export const Quantity = styled.h1`
  text-align: center;
  background: red;
  border-radius: 15px;
  font-size: 19px;
  font-weight: 300;
  height: 40px;
  width: 40px;
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
  justify-content: center;
  flex-direction: row;

  width: 150px;
  margin: 0;

  @media only screen and (min-width: 1024px) {
    width: unset;
    justify-content: flex-start;
  }
`

export const Content = styled.div<ContentType>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
  transform-origin: bottom;
  transform: translateY(0%);
  height: calc(100% - 7.5vw - 80px);
  width: auto;
  margin: 0 15px;
  justify-content: space-evenly;
  text-align: center;

  display: ${(p) => (p.showOnMobile ? 'flex' : 'none')};

  @media only screen and (min-width: 1024px) {
    display: flex;
    height: unset;
    margin: unset;
    justify-content: space-between;
    text-align: unset;
  }

  &&:nth-of-type(2) {
    display: none;

    @media only screen and (min-width: 1024px) {
      display: flex;
      max-width: 625px;
      animation-delay: 0.5s;
    }
  }

  &&:nth-of-type(3) {
    animation-delay: 0.5s;
    z-index: 2;

    ${Items} {
      justify-content: start;

      @media only screen and (min-width: 1024px) {
        justify-content: unset;
      }
    }

    @media only screen and (min-width: 1024px) {
      max-width: 192.44px;
      display: flex;
    }
  }

  &&:nth-of-type(4) {
    z-index: 1;

    ${Items} {
      width: unset;
    }

    @media only screen and (min-width: 1024px) {
      max-width: 276.58px;
      display: flex;
    }
  }

  &&:nth-of-type(5) {
    @media only screen and (min-width: 1024px) {
      max-width: 190px;
      display: flex;
    }
  }
`
