import styled from 'styled-components'
import * as theme from '../../styles/theme'
import { boardStyles } from './styles'

export const BoardNew = styled.a`
  ${boardStyles};
  ${theme.success};

  font-weight: 500;

  &:hover {
    ${theme.successAlt};
  }
`
