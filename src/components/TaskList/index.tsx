import * as React from 'react'
import { TaskListModel } from '../../models/TaskListModel'
import { Task } from '../Task'
import { Container, Tasks, Title } from './styles'

type Props = {
  list: TaskListModel
}

export function TaskList({ list }: Props) {
  return (
    <Container>
      <Title>{list.name}</Title>
      <Tasks>{list.tasks.map(task => <Task key={task.id} task={task} />)}</Tasks>
    </Container>
  )
}
