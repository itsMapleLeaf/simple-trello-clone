import styled from 'styled-components'
import * as theme from '../../styles/theme'

export const Container = styled.li`
  ${theme.foreground};
  ${theme.shadow};
  display: flex;
  align-items: center;

  > * {
    padding: 0.5rem;
  }
`

export const Text = styled.span`
  flex-grow: 1;
`
