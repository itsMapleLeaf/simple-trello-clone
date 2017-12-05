import { observer } from 'mobx-react'
import * as React from 'react'
import { TaskListModel } from '../../models/TaskListModel'
import { DeleteButton } from '../DeleteButton'
import { QuickInput } from '../QuickInput'
import { Task } from '../Task'
import { Container, Header, Tasks, Title } from './styles'

type Props = {
  taskList: TaskListModel
  onNewTask: (text: string) => void
  onTaskRemoved: (id: string) => void
  onRemove: (id: string) => void
}

@observer
export class TaskList extends React.Component<Props> {
  render() {
    const { taskList, onTaskRemoved, onRemove } = this.props
    return (
      <Container>
        <Header>
          <Title>{taskList.name}</Title>
          <DeleteButton onClick={() => onRemove(taskList.id)} />
        </Header>
        <Tasks>
          {taskList.tasks.map(task => <Task key={task.id} task={task} onRemove={onTaskRemoved} />)}
          <QuickInput placeholder="Add new task..." onConfirm={this.props.onNewTask} />
        </Tasks>
      </Container>
    )
  }
}
