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

export const DeleteAction = styled.a`
  opacity: 0.5;
  transition: 0.2s opacity;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
