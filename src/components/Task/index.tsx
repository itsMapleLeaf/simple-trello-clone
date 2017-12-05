import * as React from 'react'
import { TaskModel } from '../../models/TaskModel'
import { DeleteButton } from '../DeleteButton'
import { Icon } from '../Icon'
import { Container, Text } from './styles'

type Props = {
  task: TaskModel
  onRemove: (id: string) => void
}

export function Task(props: Props) {
  return (
    <Container key={props.task.id}>
      <Text>{props.task.text}</Text>
      <DeleteButton onClick={() => props.onRemove(props.task.id)}>
        <Icon name="trash" size="small" />
      </DeleteButton>
    </Container>
  )
}
