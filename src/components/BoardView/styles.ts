import styled from 'styled-components'
import { clouds } from '../../styles/colors'

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${clouds};
`

export const TaskLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  margin: -0.5rem;

  > * {
    margin: 0.5rem;
  }
`

export const TaskListNew = styled.input`
  padding: 0.5rem;
  border: none;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.1);
  }
`
