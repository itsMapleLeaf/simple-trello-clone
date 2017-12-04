import * as React from 'react'
import { Delete } from '../../icons/Delete'
import { TaskModel } from '../../models/TaskModel'
import { Container, DeleteAction, Text } from './styles'

type Props = {
  task: TaskModel
}

export function Task({ task }: Props) {
  return (
    <Container key={task.id}>
      <Text>{task.text}</Text>
      <DeleteAction>
        <Delete size={24} />
      </DeleteAction>
    </Container>
  )
}
