import styled from 'styled-components'
import { flexCenter } from '../../styles/helpers'
import { boardStyles } from './styles'

export const BoardNew = styled.a`
  ${boardStyles};
  ${flexCenter};

  background: #2ecc71;

  &:hover {
    background: #27ae60;
  }
`
