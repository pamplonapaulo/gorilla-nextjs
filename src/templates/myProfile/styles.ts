import styled from 'styled-components'

export const TextBigger = styled.h1`
  color: #fbc822;
  font-size: 2rem;
  font-style: italic;
  font-weight: 600;
  margin: 0 0 4rem;
  text-align: center;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
    margin: 0;
    text-align: left;
  }
`

export const FlexCenter = styled.div`
  align-items: center;
  border-left: solid transparent 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 0 0;
  padding: 0;
  overflow: visible;
  text-align: left;
  width: calc(100% - 40px);

  @media only screen and (min-width: 1024px) {
    margin: 0;
    width: 900px;
  }

  @media only screen and (min-width: 1260px) {
    width: 1150px;
  }

  @media only screen and (min-width: 1300px) {
    width: 1260px;
  }
`

export const Item = styled.div<{ isChecked?: boolean; noOrder?: boolean }>`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid;
  border-color: rgba(204, 204, 204, 0.5);
  color: rgba(204, 204, 204, 0.5);
  margin: 0;
  padding: 15px 20px;
  text-align: center;
  width: 220px;

  @media only screen and (min-width: 1024px) {
    padding: 15px 30px;
  }
`

export const Span = styled.span<{ isLowercase?: boolean }>`
  text-align: left;
  text-transform: ${(p) => (p.isLowercase ? 'lowercase' : 'capitalize')};
`

export const Text = styled.p`
  color: inherit;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 2;
  text-shadow: 0px 1px 2px #000;
  text-transform: capitalize;

  ${Span}:nth-of-type(2) {
    color: #fbc822;
    font-weight: 500;
    font-size: 16px;
    font-style: italic;
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
  margin: 2rem 0;
  justify-content: space-evenly;
  padding: 10px;
  text-align: center;
  width: 100%;

  &:nth-of-type(1) {
    margin-top: 0;

    @media only screen and (min-width: 1024px) {
      margin-top: 2rem;
    }
  }

  > ${Text} {
    color: #fff;
    font-size: 1.3rem;
    margin: 15px 0;
    text-transform: uppercase;

    @media only screen and (min-width: 1024px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(1) ${Item} {
    width: unset;
    margin: 15px;

    @media only screen and (min-width: 1024px) {
      width: 100%;

      &:nth-of-type(1) {
        margin-right: 15px;
      }

      &:nth-of-type(2) {
        margin-left: 15px;
      }
    }
  }

  &:nth-of-type(2) ${Item} {
    margin: 15px;

    @media only screen and (min-width: 1024px) {
      margin: 0 15px;
      width: 25%;

      &:nth-of-type(1) {
        margin-left: 0;
      }

      &:nth-of-type(4) {
        margin-right: 0;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    height: unset;
    justify-content: space-between;
    padding: 30px;
    text-align: unset;
  }
`

export const Break = styled.br`
  display: block;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

export const Input = styled.input`
  color: #fbc822;
  height: 30px;
  margin: 0.35em 0 0.85em 0;
  outline: none;
  letter-spacing: 1.75px;
  outline-color: white;
  outline-width: 1px;
  border-width: 1px;
  padding: 0;
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
  text-align: center;
  transition: 0.2s all;

  &::-webkit-input-placeholder {
    color: $color-white;
    letter-spacing: 1.5px;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 11px;
    text-transform: uppercase;
  }

  &:focus {
    color: $color-white;

    &::-webkit-input-placeholder {
      color: transparent;
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  ${Content} {
    margin-top: 2rem !important;
    align-items: center;
    padding: 30px 0;

    &:nth-of-type(2) {
      margin-bottom: 4rem;

      @media only screen and (min-width: 1024px) {
        margin-bottom: unset;
      }
    }

    @media only screen and (min-width: 1024px) {
      align-items: unset;
      padding: 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    ${Content} {
      max-width: 255px;
    }
  }
`
