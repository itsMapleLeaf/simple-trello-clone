import styled from 'styled-components'
import { asphalt } from '../../styles/colors'

export const Container = styled.li`
  background-color: ${asphalt};
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
