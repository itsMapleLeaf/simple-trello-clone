import styled from 'styled-components'
import { asphalt, asphaltDark, clouds } from '../../styles/colors'

export const Container = styled.section`
  margin: 1rem;
`

export const BoardName = styled.h2`
  margin-bottom: 1rem;
`

export const TaskListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -0.5rem;

  > * {
    margin: 0.5rem;
  }
`

export const TaskListTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`

export const TaskList = styled.article`
  width: 16rem;
  min-height: 10rem;
  padding: 0.5rem;
  background-color: ${asphaltDark};
  color: ${clouds};
`

export const TaskContainer = styled.ul`
  > * + * {
    margin-top: 0.5rem;
  }
`

export const Task = styled.li`
  background-color: ${asphalt};
  display: flex;
  align-items: center;

  > * {
    padding: 0.5rem;
  }
`

export const TaskText = styled.span`
  flex-grow: 1;
`

export const TaskDelete = styled.a`
  opacity: 0.5;
  transition: 0.2s opacity;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
