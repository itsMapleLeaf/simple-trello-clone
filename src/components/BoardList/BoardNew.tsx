import styled from 'styled-components'
import * as colors from '../../styles/colors'
import * as theme from '../../styles/theme'
import { boardStyles } from './styles'

export const BoardNew = styled.a`
  ${boardStyles};
  ${theme.background};

  background: ${colors.green};
  font-weight: 500;

  &:hover {
    ${theme.backgroundAlt};
    background: ${colors.greenDark};
  }
`
