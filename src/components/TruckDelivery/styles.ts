import styled from 'styled-components'

export const SVG = styled.svg<{ isOn: boolean }>`
  transform: skewX(-22.5deg) scale(0.5);
  fill: ${(p) => (p.isOn ? '#fbc822' : 'rgba(204, 204, 204, 0.5)')};
`
