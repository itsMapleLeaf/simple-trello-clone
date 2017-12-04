import * as React from 'react'
import { ListModel } from '../../models/ListModel'
import { Task } from '../Task'
import { Container, Tasks, Title } from './styles'

type Props = {
  list: ListModel
}

export function TaskList({ list }: Props) {
  return (
    <Container>
      <Title>{list.name}</Title>
      <Tasks>{list.tasks.map(task => <Task key={task.id} task={task} />)}</Tasks>
    </Container>
  )
}
