import styled from 'styled-components'

export const Wrap = styled.div`
  width: 190px;
  height: 90px;
  display: flex;
  justify-content: end;
`

export const Btn = styled.button`
  /* background: rgba(0, 0, 0, 0.4); */
  background: #fbc822;
  /* border: solid 1px rgb(64, 44, 28); */
  border: none;
  border-radius: 50%;
  box-shadow: 0px 1px 3px #000;
  color: rgb(64, 44, 28);
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 800;
  height: 100px;
  letter-spacing: 1px;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  /* text-shadow: 0px 1px 2px #000; */
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 100px;
  z-index: 9;

  @media only screen and (min-width: 1024px) {
    &:hover {
      background: #2da650;
      color: #fff;
      transform: scale(1.1);
    }
  }
`
