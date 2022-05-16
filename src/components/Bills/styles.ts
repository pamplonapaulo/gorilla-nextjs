import styled from 'styled-components'

export const SVG = styled.svg<{ isOn: boolean }>`
  transform: scale(0.65);
  fill: ${(p) => (p.isOn ? '#fbc822' : 'rgba(204, 204, 204, 0.5)')};
`
