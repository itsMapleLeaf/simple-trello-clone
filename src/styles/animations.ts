import { keyframes } from 'styled-components'

const spin = (direction: number) => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${360 * Math.sign(direction)}deg);
  }
`

export const spinLeft = spin(-1)
export const spinRight = spin(1)
