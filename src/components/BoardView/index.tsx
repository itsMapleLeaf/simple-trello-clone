import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import { BoardModel } from '../../models/BoardModel'
import { TaskList } from '../TaskList'
import { TaskListNew, TaskLists, Title } from './styles'

type Props = {
  board: BoardModel
  onNewList: (name: string) => void
}

@observer
export class BoardView extends React.Component<Props> {
  @observable newListName = ''

  @action
  setNewListName(name: string) {
    this.newListName = name
  }

  handleInput = (event: React.UIEvent<HTMLInputElement>) => {
    this.setNewListName(event.currentTarget.value)
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.props.onNewList(this.newListName)
      this.setNewListName('')
    }
  }

  render() {
    const { board } = this.props
    return (
      <React.Fragment>
        <Title>{board.name}</Title>
        <TaskLists>
          {board.lists.map(list => (
            <TaskList
              key={list.id}
              taskList={list}
              onNewTask={list.createTask.bind(list)}
              onTaskRemoved={list.removeTask.bind(list)}
            />
          ))}
          <TaskListNew
            placeholder="Create new list..."
            value={this.newListName}
            onInput={this.handleInput}
            onKeyDown={this.handleKeyDown}
          />
        </TaskLists>
      </React.Fragment>
    )
  }
}
