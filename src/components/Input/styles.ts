import styled from 'styled-components'

export const HiddenInput = styled.input`
  display: none;
`

export const Container = styled.div`
  display: flex;
  transform: scale(${(props) => props.theme.size});
  transform-origin: left;

  @media only screen and (min-width: 1024px) {
    align-items: center;
  }
`

export const Btn = styled.button`
  background: wheat;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  width: 25px;
  height: 25px;
  font-size: 1.5rem;

  &:active {
    background: #c09060;
    color: #fff;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      background: #e8c48e;
    }

    font-size: 2.5rem;
    width: 50px;
    height: 50px;
  }
`

export const FakeInput = styled.div`
  text-align: center;
  background: white;
  border: none;
  border-radius: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 0.7em 1em;
  font-weight: 500;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
  text-transform: uppercase;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  align-items: center;
  display: flex;
  padding: 0;
  width: 25px;
  height: 25px;

  @media only screen and (min-width: 1024px) {
    width: 65px;
    height: 50px;
  }
`

export const P = styled.p`
  display: table-cell;
  font-size: 1rem;
  vertical-align: middle;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`
