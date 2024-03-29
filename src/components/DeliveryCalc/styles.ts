import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label<{ isHidden?: boolean }>`
  color: #aaaaaa;
  font-weight: 300;
  font-size: 1.35em;
  font-style: italic;
  opacity: ${(p) => (p.isHidden ? 0 : 1)};
  text-transform: uppercase;
  text-shadow: 0px 1px 4px #000;
`

export const Input = styled.input`
  color: #fbc822;
  height: 30px;
  width: 120px;
  margin: 0.35em auto 0.85em auto;
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

  @media only screen and (min-width: 1024px) {
    margin: 0.35em 0 0.85em 0;
  }
`

export const Fee = styled.h1<{ isHidden: boolean }>`
  color: #fff;
  font-weight: 300;
  font-size: 2.75rem;
  font-style: italic;
  opacity: ${(p) => (p.isHidden ? 0 : 1)};
  text-transform: uppercase;
  text-shadow: 0px 1px 4px #000;
`
