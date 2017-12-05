import styled from 'styled-components'
import { background, backgroundAlt, green, greenDark } from '../../styles/colors'
import { boardStyles } from './styles'

export const BoardNew = styled.a`
  ${boardStyles};
  ${background};

  background: ${green};
  font-weight: 500;

  &:hover {
    ${backgroundAlt};
    background: ${greenDark};
  }
`
