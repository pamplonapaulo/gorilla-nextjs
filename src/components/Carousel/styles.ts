import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: row;

  &&:nth-of-type(1) {
    @media only screen and (min-width: 768px) {
      width: 600px;
    }

    @media only screen and (min-width: 1024px) {
      width: 768px;
    }

    @media only screen and (min-width: 1260px) {
      width: 1024px;
    }

    @media only screen and (min-width: 1300px) {
      width: 1260px;
    }
  }

  &&:nth-of-type(2) {
    margin-top: 25px;
  }

  &&:nth-of-type(3) {
    height: 100px;
    overflow: visible;
    align-items: center;
  }
`

export const Window = styled.div`
  display: flex;
  flex-direction: row;
`

export const Item = styled.div`
  text-align: center;
  width: 300px;
  height: 550px;
  padding: 20px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &&:nth-child(even) {
    background: rgba(28, 19, 11, 0.9);
  }

  &&:nth-child(odd) {
    background: rgba(45, 166, 80, 0.9);
  }

  @media only screen and (min-width: 768px) {
    width: calc(600px / 2);
  }

  @media only screen and (min-width: 1024px) {
    width: calc(768px / 3);
  }

  @media only screen and (min-width: 1260px) {
    width: calc(1024px / 4);
  }

  @media only screen and (min-width: 1300px) {
    width: calc(1260px / 4);
  }
`

export const H = styled.h1`
  color: #ef8321;
  font-weight: 600;
  font-size: 1.4rem;
  text-align: center;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;
  font-size: 3rem;

  &&:nth-of-type(2) {
    /* text-align: right; */

    @media only screen and (min-width: 1024px) {
      font-size: 2.3rem;
      /* margin-bottom: 3rem; */
    }
  }
`

export const Desc = styled.p`
  color: #ef8321;
  font-weight: 600;
  font-size: 16px;
  margin: 10px;
  text-shadow: 0px 1px 2px #000;
  text-align: center;
`

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 7.25px;
`

export const Attribute = styled.li<{ isChecked: boolean }>`
  color: ${(p) => (p.isChecked ? '#fbc822' : '#ccc')};
  list-style-type: none;
  font-size: 13px;
  line-height: 1.75;
  text-align: left;
  text-shadow: 0px 1px 2px #000;

  &::before {
    content: '${(p) => (p.isChecked ? '\\2713' : '\\00D7')}';
    margin-right: 5px;
    font-size: 15px;
    font-weight: 900;
    transform: translateY(-6px);
  }
`

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Arrow = styled.span`
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  color: #fbc822;
  cursor: pointer;
  display: flex;
  /* display: table-cell; */
  font-weight: 400;
  justify-content: center;
  padding: 0;
  transition: ease-in 0.2s all;
  text-align: center;
  text-shadow: 0px 1px 4px #000;
  white-space: nowrap;
  vertical-align: middle;

  height: 50px;
  width: 50px;
  font-size: 50px;
  line-height: 100%;
  font-family: monospace;

  &&:nth-of-type(1) {
    margin-right: 3rem;

    &::after {
      content: '\\00ab';
      transform: translateY(-6px);
    }
  }

  &&:nth-of-type(2) {
    margin-left: 3rem;

    &::after {
      content: '\\00bb';
      transform: translateY(-6px);
    }
  }

  &:hover {
    transform: scale(1.3);
  }
`

export const Dot = styled.span`
  background: #ccc;
  border-radius: 7.5px;
  box-shadow: 0px 1px 4px #000;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin: 10px;
  transition: ease-in 0.2s all;

  &:hover {
    background: #fbc822;
    transform: scale(1.3);
  }
`