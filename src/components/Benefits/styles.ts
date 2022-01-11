import styled from 'styled-components'

export const T = styled.h1`
  color: #fbc822;
  font-size: 5rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 5px #000;

  text-align: center;
  font-size: 4rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2;
  padding: 0 4rem;
`

export const Benefits = styled.ul<{ isHome: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${(p) => (p.isHome ? '0px 7.25px' : '50px 7.25px')};
  width: ${(p) => (p.isHome ? 'unset' : '100%')};
  background: ${(p) => (p.isHome ? 'none' : '#ee7416')};
  box-shadow: ${(p) => (p.isHome ? 'none' : '2px 2px 5px #000')};

  @media only screen and (min-width: 1024px) {
    width: ${(p) => (p.isHome ? 'unset' : '50%')};
  }
`

export const Attribute = styled.li<{ isChecked: boolean; isHome: boolean }>`
  list-style-type: none;
  text-align: left;
  margin: auto;
  font-size: ${(p) => (p.isHome ? '13px' : '1.5rem')};
  width: ${(p) => (p.isHome ? 'unset' : '80%')};
  color: ${(p) =>
    !p.isChecked
      ? p.isHome
        ? '#ccc'
        : 'rgba(204, 204, 204, 0.6)'
      : p.isHome
      ? '#fbc822'
      : '#402c1c'};

  text-shadow: ${(p) => (p.isHome ? '0px 1px 2px #000' : 'none')};
  line-height: 1.75;

  &::before {
    content: '${(p) => (p.isChecked ? '\\2713' : '\\00D7')}';
    margin-right: 5px;
    font-weight: 900;
    transform: translateY(-6px);
  }

  @media only screen and (min-width: 1024px) {
    font-size: ${(p) => (p.isHome ? '13px' : '2rem')};
    line-height: ${(p) => (p.isHome ? 2 : 1.75)};
  }
`
