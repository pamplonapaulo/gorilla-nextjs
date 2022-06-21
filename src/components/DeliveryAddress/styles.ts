import styled, { css } from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media only screen and (min-width: 1024px) {
    text-align: unset;

    &:last-child {
      width: 200px;
    }

    &:nth-of-type(2) {
      margin-left: 30px;
    }
  }
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    > ${Wrap} {
      &:nth-of-type(2) {
        margin-left: 30px;
      }
    }

    > ${Column} {
      width: unset;
    }
  }
`

export const Label = styled.label<{ isInvalid?: boolean }>`
  color: ${(p) => (p.isInvalid ? '#FF0000' : '#fbc822')};
  font-weight: 300;
  font-size: 1.35em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
`

const readOnly = css`
  background: transparent;
  border-color: transparent;
  color: rgba(0, 0, 0, 1);
  color: #fbc822;
  font-style: normal;
  font-weight: 100;
  font-size: 1.35em;
  margin-top: 0;
  padding: 0;
  text-shadow: 1px 1px 0px rgb(0 0 0 / 50%);
`

export const Input = styled.input<{
  width: string
  isValid?: boolean
  readOnly?: boolean
}>`
  background: ${(p) =>
    p.isValid ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
  border-color: ${(p) => (p.isValid ? 'rgba(255, 255, 255, 0.3)' : '#FF0000')};
  border-width: 1px;
  color: ${(p) => (p.isValid ? '#fbc822' : '#FF0000')};
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
  height: 30px;
  letter-spacing: 1.75px;
  margin: 0.35em auto 0.85em auto;
  outline: none;
  outline-color: white;
  outline-width: 1px;
  padding: 0 0 0 10px;
  text-align: left;
  text-shadow: 0px 1px 2px #000;
  transition: 0.2s all;
  width: 100%;

  ${(p) => p.readOnly && readOnly}

  &::-webkit-input-placeholder {
    color: $color-white;
    color: ${(p) => (p.isValid ? '$color-white' : '#FF0000')};
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

  @media only screen and (min-width: 1024px) {
    margin: 0.35em 0 0.85em 0;
    width: ${(p) => p.width};
  }
`

export const LittleText = styled.p`
  color: #fbc822;
  font-weight: 300;
  font-size: 1.35em;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
`

export const Text = styled.h1`
  color: #fbc822;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
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
  }
`
