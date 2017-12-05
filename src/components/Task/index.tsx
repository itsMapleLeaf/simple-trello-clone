import * as React from 'react'
import { TaskModel } from '../../models/TaskModel'
import { Icon } from '../Icon'
import { Container, DeleteAction, Text } from './styles'

type Props = {
  task: TaskModel
  onRemove: (id: string) => void
}

export function Task(props: Props) {
  return (
    <Container key={props.task.id}>
      <Text>{props.task.text}</Text>
      <DeleteAction onClick={() => props.onRemove(props.task.id)}>
        <Icon name="trash" size="small" />
      </DeleteAction>
    </Container>
  )
}
