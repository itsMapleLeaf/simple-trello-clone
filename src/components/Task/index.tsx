import * as React from 'react'
import { TaskModel } from '../../models/TaskModel'
import { Icon } from '../Icon'
import { Container, DeleteAction, Text } from './styles'

type Props = {
  task: TaskModel
}

export function Task({ task }: Props) {
  return (
    <Container key={task.id}>
      <Text>{task.text}</Text>
      <DeleteAction>
        <Icon name="trash" size="small" />
      </DeleteAction>
    </Container>
  )
}
