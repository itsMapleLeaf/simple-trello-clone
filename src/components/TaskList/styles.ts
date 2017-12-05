import styled from 'styled-components'
import * as theme from '../../styles/theme'

export const Container = styled.article`
  width: 16rem;
  padding: 0.5rem;
  ${theme.foregroundAlt};
  ${theme.shadow};
`

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`

export const Tasks = styled.ul`
  margin: -0.25rem;
  > * {
    margin: 0.25rem;
  }

  display: flex;
  flex-direction: column;
`

export const NewTask = styled.input`
  padding: 0.5rem;
  border: none;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.1);
  }
`
