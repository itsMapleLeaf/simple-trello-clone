import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import { TaskListModel } from '../../models/TaskListModel'
import { Task } from '../Task'
import { Container, NewTask, Tasks, Title } from './styles'

type Props = {
  taskList: TaskListModel
  onNewTask: (text: string) => void
  onTaskRemoved: (id: string) => void
}

@observer
export class TaskList extends React.Component<Props> {
  @observable newTaskText = ''

  @action
  setNewTaskText(text: string) {
    this.newTaskText = text
  }

  handleInput = (event: React.UIEvent<HTMLInputElement>) => {
    this.setNewTaskText(event.currentTarget.value)
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.props.onNewTask(this.newTaskText)
      this.setNewTaskText('')
    }
  }

  render() {
    const { taskList, onTaskRemoved } = this.props
    return (
      <Container>
        <Title>{taskList.name}</Title>
        <Tasks>
          {taskList.tasks.map(task => <Task key={task.id} task={task} onRemove={onTaskRemoved} />)}
          <NewTask
            placeholder="Add new task..."
            value={this.newTaskText}
            onInput={this.handleInput}
            onKeyDown={this.handleKeyDown}
          />
        </Tasks>
      </Container>
    )
  }
}
