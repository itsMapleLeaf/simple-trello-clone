import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { BoardModel } from '../../models'
import { StoreInjector } from '../../stores'
import { Icon } from '../Icon/index'
import { QuickInput } from '../QuickInput/index'
import { TaskList } from '../TaskList'
import { DeleteBoardButton, Header, TaskLists, Title } from './styles'

type Props = {
  board: typeof BoardModel.Type
  onNewList: (name: string) => void
  onRemove?: () => void
}

const storesToProps: StoreInjector<Props> = (stores, props) => {
  return {
    onRemove() {
      stores.boardStore.removeBoard(props.board.id)
    },
  }
}

@inject(storesToProps)
@observer
export class BoardView extends React.Component<Props> {
  render() {
    const { board } = this.props
    return (
      <React.Fragment>
        <Header>
          <Title>{board.name}</Title>
          <div>
            <DeleteBoardButton onClick={this.props.onRemove}>
              <Icon name="trash" size="small" />
              <span>Delete</span>
            </DeleteBoardButton>
          </div>
        </Header>
        <TaskLists>
          {board.lists.map(list => (
            <TaskList
              key={list.id}
              taskList={list}
              onNewTask={list.createTask.bind(list)}
              onTaskRemoved={list.removeTask.bind(list)}
              onRemove={board.removeList.bind(board)}
            />
          ))}
          <QuickInput placeholder="Create new list..." onConfirm={this.props.onNewList} />
        </TaskLists>
      </React.Fragment>
    )
  }
}
