import { observer } from 'mobx-react'
import * as React from 'react'
import { TaskListModel } from '../../models/TaskListModel'
import { QuickInput } from '../QuickInput'
import { Task } from '../Task'
import { Container, Tasks, Title } from './styles'

type Props = {
  taskList: TaskListModel
  onNewTask: (text: string) => void
  onTaskRemoved: (id: string) => void
}

@observer
export class TaskList extends React.Component<Props> {
  render() {
    const { taskList, onTaskRemoved } = this.props
    return (
      <Container>
        <Title>{taskList.name}</Title>
        <Tasks>
          {taskList.tasks.map(task => <Task key={task.id} task={task} onRemove={onTaskRemoved} />)}
          <QuickInput placeholder="Add new task..." onConfirm={this.props.onNewTask} />
        </Tasks>
      </Container>
    )
  }
}
