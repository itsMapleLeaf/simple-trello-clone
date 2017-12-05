import { observer } from 'mobx-react'
import * as React from 'react'
import { BoardModel } from '../../models/BoardModel'
import { Icon } from '../Icon/index'
import { BoardLink, BoardNew, Container } from './styles'

type BoardListProps = {
  boards: BoardModel[]
  onNewBoard?: () => void
}

@observer
export class BoardList extends React.Component<BoardListProps> {
  render() {
    return (
      <Container>
        {this.props.boards.map(this.renderBoard)}
        <BoardNew onClick={this.props.onNewBoard}>
          <Icon name="add" size="small" />
          Create New Board...
        </BoardNew>
      </Container>
    )
  }

  renderBoard = (board: BoardModel) => (
    <BoardLink to={`/board/${board.id}`} key={board.id}>
      <h2>{board.name}</h2>
    </BoardLink>
  )
}
