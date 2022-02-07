import styled from 'styled-components'

export const Circle = styled.div<{ color: string; alignSelf: string }>`
  align-self: ${(p) => p.alignSelf};
  border-radius: 50%;
  border-color: ${(p) => (p.color ? p.color : '000')};
  border-width: 3px;
  border-style: solid;
  color: ${(p) => (p.color ? p.color : '000')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  height: 30px;
  justify-content: center;
  width: 30px;
  text-align: center;
  transition: ease 0.2s all;

  @media only screen and (min-width: 1024px) {
    &:hover {
      transform: rotate(90deg) scale(1.2);
    }
  }
`
