import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { boardStyles } from './styles'

export const Board = styled(Link)`
  ${boardStyles};
  display: block;
`
