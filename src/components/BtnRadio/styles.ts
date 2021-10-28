import styled from 'styled-components'

export const Check = styled.div`
  display: block;
  position: absolute;
  border: 3px solid #aaaaaa;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  top: 0;
  /* left: 20px; */
  z-index: 5;
  transition: border 0.25s linear;

  &&:before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 10px;
    width: 10px;
    top: 2px;
    left: 2px;
    margin: auto;
    transition: background 0.25s linear;
  }
`

export const Label = styled.label`
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 1.35em;
  padding: 2px 25px 25px 30px;
  margin: 0;
  height: 30px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s linear;
  font-style: italic;
  text-transform: uppercase;
`

export const Input = styled.input`
  position: absolute;
  visibility: hidden;

  &:checked ~ ${Check} {
    border: 3px solid #fbc822;

    &::before {
      background: #fbc822;
    }
  }

  &:checked ~ ${Label} {
    color: #fbc822;
  }
`

export const Wrap = styled.div`
  color: #aaaaaa;
  display: block;
  position: relative;
  /* float: left;
  width: 100%;
  height: 100px; */

  &:hover {
    ${Label} {
      color: #fff;
    }

    ${Check} {
      border: 3px solid #fff;
    }

    ${Input} {
      &:checked ~ ${Label} {
        color: #fbc822;
      }
      &:checked ~ ${Check} {
        border: 3px solid #fbc822;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    /* width: 190px; */
  }
`
