import styled from 'styled-components'

export const Prices = styled.div`
  margin: 5rem auto 0;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    margin: 0;
    width: 200px;
  }
`

export const Text = styled.h1`
  color: #fbc822;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  /* text-align: left; */
  text-shadow: 0px 1px 2px #000;
  margin-bottom: 2rem;

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

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  text-align: left;

  @media only screen and (min-width: 1024px) {
    text-align: unset;
    width: unset;
  }

  > div {
    margin: 0 auto;
    @media only screen and (min-width: 1024px) {
      margin: unset;
    }
  }
`

export const LittleText = styled.p`
  color: #fbc822;
  font-weight: 300;
  font-size: 1.35em;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:last-child {
    border-top: #fbc822 solid 3px;
    padding-top: 30px;
  }
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  > ${Wrap} {
    &:nth-of-type(2) {
      margin-left: 30px;
    }
  }
`

export const Label = styled.label`
  color: #ee7416;
  color: #fbc822;
  font-weight: 300;
  font-size: 1.35em;
  /* font-style: italic; */
  text-transform: uppercase;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
`

export const Input = styled.input<{ width: string }>`
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  border-width: 1px;
  color: #fbc822;
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
  width: ${(p) => p.width};

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

export const Loading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Carrregando...',
}))`
  width: 4rem;
`
