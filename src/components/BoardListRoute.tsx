import { ObservableMap } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import BoardModel from '../models/BoardModel'
import BoardList from './BoardList'

type Props = {
  boards: ObservableMap<BoardModel>
}

@observer
class BoardListRoute extends React.Component<Props> {
  render() {
    const boards = this.props.boards.values()
    const sortedBoards = boards.slice().sort((a, b) => a.title.localeCompare(b.title))
    return <BoardList boards={sortedBoards} onNewBoard={this.handleNewBoard} />
  }

  private handleNewBoard = () => {
    // TODO
  }
}

export default BoardListRoute
