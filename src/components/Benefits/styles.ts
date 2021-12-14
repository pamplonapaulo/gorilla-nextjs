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

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 50px 7.25px;
  width: 50%;
  background: #ee7416;
  box-shadow: 2px 2px 5px #000;
`

export const Attribute = styled.li<{ isChecked: boolean }>`
  color: ${(p) => (p.isChecked ? '#402c1c' : '#ccc')};
  list-style-type: none;
  line-height: 1.75;
  text-align: left;
  font-size: 2.5rem;
  width: 80%;
  margin: auto;
  opacity: ${(p) => (p.isChecked ? '1' : '0.5')};

  &::before {
    content: '${(p) => (p.isChecked ? '\\2713' : '\\00D7')}';
    margin-right: 5px;
    font-size: 2.5rem;
    font-weight: 900;
    transform: translateY(-6px);
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;

    &::before {
      font-size: 2.5rem;
    }
  }
`
