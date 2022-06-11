import styled from 'styled-components'

export const Item = styled.div<{ isChecked?: boolean; noOrder?: boolean }>`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid;
  border-color: ${(p) =>
    p.isChecked
      ? '#fbc822'
      : p.isChecked === undefined
      ? '#fbc822'
      : 'rgba(204, 204, 204, 0.5)'};

  color: ${(p) =>
    p.isChecked
      ? '#fbc822'
      : p.isChecked === undefined
      ? '#fbc822'
      : 'rgba(204, 204, 204, 0.5)'};
  margin: 0;
  padding: 15px;
  text-align: center;
  width: 260px;

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
    top: 0;
    transform: translateX(115%);
    text-shadow: black 2px 2px 3px;

    @media only screen and (min-width: 1024px) {
      top: 18px;
      transform: translateX(230%);
    }
  }

  &:nth-of-type(1) {
    @media only screen and (min-width: 1024px) {
      margin-bottom: ${(p) => (p.noOrder ? '0' : '10px')};
    }
  }

  max-width: 120px;
  width: 120px;
  min-width: 120px;

  @media only screen and (min-width: 1024px) {
    margin: ${(p) => (p.noOrder ? '0' : '0 15px')};
    padding: 30px;
    min-width: 180px;

    &:nth-of-type(1) {
      margin: ${(p) => (p.noOrder ? '0' : '0 15px 0 0')};
    }
  }
`

export const TextBigger = styled.h1<{ noOrder?: boolean }>`
  color: #fbc822;
  font-size: 2rem;
  font-style: italic;
  font-weight: 600;
  margin: 4rem auto;
  margin: ${(p) => (p.noOrder ? '0 0 2rem 0' : '4rem auto')};
  text-align: center;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;

  &&:nth-of-type(1) {
    margin: ${(p) => (p.noOrder ? '0 0 2rem 0' : '0 auto 4rem')};

    @media only screen and (min-width: 1024px) {
      margin: ${(p) => (p.noOrder ? '0 0 2rem 0' : '-30px auto 4rem')};
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
    margin: ${(p) => (p.noOrder ? '0 0 2rem 0' : '4rem 15px 2rem 0')};
    text-align: unset;
  }
`

export const Text = styled.p`
  color: inherit;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 2;
  text-shadow: 0px 1px 2px #000;
  text-transform: capitalize;
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
  font-style: normal;
  text-transform: capitalize;
`

export const FlexCenter = styled.div<{ noOrder?: boolean }>`
  border-left: solid transparent 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  overflow: visible;
  text-align: left;
  width: ${(p) => (p.noOrder ? 'auto' : 'calc(100% - 40px)')};
  margin: ${(p) => (p.noOrder ? '50px 0 0' : '50px 0 2rem')};
  padding: ${(p) => (p.noOrder ? '0' : '0 10px')};
  align-items: ${(p) => (p.noOrder ? 'center' : 'unset')};

  @media only screen and (min-width: 1024px) {
    margin: ${(p) => (p.noOrder ? '0' : '100px 0 2rem -32px')};
    padding: ${(p) => (p.noOrder ? '0' : '0 10px 0 32px')};
    width: ${(p) => (p.noOrder ? 'auto' : '900px')};
  }

  @media only screen and (min-width: 1260px) {
    width: ${(p) => (p.noOrder ? 'auto' : '1150px')};
  }

  @media only screen and (min-width: 1300px) {
    width: ${(p) => (p.noOrder ? 'auto' : '1260px')};
  }
`

export const Content = styled.div<{ noOrder?: boolean }>`
  backdrop-filter: blur(10px);
  background: rgba(28, 19, 11, 0.65);
  border: 1px solid #000;
  box-shadow: 0px 1px 3px #000;
  display: ${(p) => (p.noOrder ? 'table' : 'flex')};
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
  height: calc(100% - 7.5vw - 80px);
  justify-content: start;
  width: auto;
  margin: 0;
  padding: ${(p) => (p.noOrder ? '30px' : '10px')};
  text-align: center;
  transform-origin: bottom;
  transform: translateY(0%);

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    height: unset;
    margin: unset;
    padding: ${(p) => (p.noOrder ? '30px' : '30px 30px 23px')};
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
      max-width: unset;
      width: auto;

      &:nth-of-type(1) {
        margin-bottom: ${(p) => (p.noOrder ? '0' : '12px')};

        @media only screen and (min-width: 1024px) {
          margin-bottom: unset;
        }
      }

      ${Text}:nth-of-type(1) {
        margin-right: 30px;
        font-size: 13px;
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

    ${Text} {
      font-size: 10px;
    }

    @media only screen and (min-width: 1024px) {
      padding: 30px 30px 23px;

      ${Text} {
        font-size: 13px;
      }
    }
  }

  &:nth-of-type(3) {
    flex-direction: row;
    overflow: scroll;

    ${Item} {
      margin-right: 10px;

      &:last-of-type {
        margin-right: 0px;
      }

      @media only screen and (min-width: 1024px) {
        margin: 0 15px;

        &:nth-of-type(1) {
          margin-left: 0px;
        }
      }
    }

    ${Text} {
      font-size: 10px;
      @media only screen and (min-width: 1024px) {
        font-size: 13px;
      }
    }
  }

  &:nth-of-type(4) {
    flex-direction: row;
    overflow: scroll;

    ${Item} {
      margin-right: 10px;

      &:last-of-type {
        margin-right: 0px;
      }

      @media only screen and (min-width: 1024px) {
        margin: 0 15px;

        &:nth-of-type(1) {
          margin-left: 0px;
        }
      }
    }
    ${Text} {
      font-size: 10px;
      @media only screen and (min-width: 1024px) {
        font-size: 13px;
      }
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
    display: flex;
    float: right;
    font-size: 13px;
    font-weight: 300;
    height: 30px;
    justify-content: center;
    width: 30px;
    position: absolute;
    text-align: center;
    transform: translateY(-50%);

    @media only screen and (min-width: 1024px) {
      transform: translate(85px, -60%);
    }

    span {
      font-size: 15px;
      margin: 0 3px 1px 0;
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
