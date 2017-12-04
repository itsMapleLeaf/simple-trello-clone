import styled from 'styled-components'
import { boardStyles } from './styles'

export const BoardNew = styled.a`
  ${boardStyles};

  background: #2ecc71;

  &:hover {
    background: #27ae60;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`
