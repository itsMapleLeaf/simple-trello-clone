import { observer } from 'mobx-react'
import * as React from 'react'
import { BoardModel } from '../../models/BoardModel'
import { QuickInput } from '../QuickInput'
import { TaskList } from '../TaskList'
import { TaskLists, Title } from './styles'

type Props = {
  board: BoardModel
  onNewList: (name: string) => void
}

@observer
export class BoardView extends React.Component<Props> {
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
          <QuickInput placeholder="Create new list..." onConfirm={this.props.onNewList} />
        </TaskLists>
      </React.Fragment>
    )
  }
}
