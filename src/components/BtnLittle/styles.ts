import styled from 'styled-components'

type WrapProps = {
  height?: string
  dangerMode?: boolean | null
  noScale?: boolean
}

export const Wrap = styled.div<WrapProps>`
  width: 190px;
  display: flex;
  justify-content: center;
  height: unset;
  outline: none;
  transform: ${(p) =>
    p.dangerMode ? 'scale(1)' : p.noScale ? 'scale(1)' : 'scale(0.65)'};

  @media only screen and (min-width: 1024px) {
    height: ${(p) => (p.height ? p.height : '70px')};
    transform: scale(1);
  }
`

export const Btn = styled.button<{
  dangerMode?: boolean | null
}>`
  background: rgba(0, 0, 0, 0.4);
  border: solid 1px;
  border-radius: 0;
  box-shadow: 0px 1px 3px #000;
  border-color: ${(p) =>
    p.dangerMode === null ? '#7D7D7D' : p.dangerMode ? 'red' : '#fff'};
  color: ${(p) =>
    p.dangerMode === null ? '#7D7D7D' : p.dangerMode ? 'red' : '#fff'};
  cursor: ${(p) => (p.dangerMode === null ? 'default' : 'pointer')};
  font-weight: 100;
  height: 50px;
  letter-spacing: 1px;
  outline: none;
  overflow: hidden;
  opacity: ${(p) => (p.dangerMode === null ? '0.5' : '1')};

  padding: 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.05s;
  transition: all 0.2s ease-in-out;
  width: 190px;
  z-index: 0;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    color: ${(p) =>
      p.dangerMode === null ? '#7D7D7D' : p.dangerMode ? 'red' : '#fff'};
  }

  @media only screen and (min-width: 1024px) {
    display: block;
    font-size: 1.3rem;

    &&:before {
      width: 0%;
      height: 100%;
      content: '';
      margin: auto;
      top: 0;
      left: 0;
      background: #fbc822;
      transition: width 0.1s ease-in-out;
      z-index: -1;
    }

    &:hover {
      background: ${(p) =>
        p.dangerMode === null
          ? 'rgba(0, 0, 0, 0.4)'
          : p.dangerMode
          ? 'red'
          : '#ef8321'};
      color: ${(p) =>
        p.dangerMode === null ? '#7D7D7D' : p.dangerMode ? 'red' : '#ef8321'};
      border-color: ${(p) =>
        p.dangerMode === null ? '#7D7D7D' : p.dangerMode ? 'red' : '#fbc822'};
      text-shadow: 0px 1px 2px #000;
      transform: ${(p) => (p.dangerMode === null ? 'scale(1)' : 'scale(1.1)')};
    }
  }
`
