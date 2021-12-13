import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
	0% {
		opacity: 0.5;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
`

export const Check = styled.div<{ shouldPulse: boolean }>`
  display: block;
  position: absolute;
  border: 3px solid #aaaaaa;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  top: 0;
  z-index: 5;
  transition: border 0.25s linear;

  animation: 1s infinite;
  /* animation-play-state: ${(p) => (p.shouldPulse ? 'running' : 'paused')}; */
  animation-name: ${(p) => (p.shouldPulse ? pulse : 'none')};

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

export const Label = styled.label<{ shouldPulse: boolean }>`
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

  /* text-shadow: 0 0 0 rgba(255, 255, 255, 1); */
  animation: 1s infinite;
  animation-name: ${(p) => (p.shouldPulse ? pulse : 'none')};
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
`
