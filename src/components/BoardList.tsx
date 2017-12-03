import { observer } from 'mobx-react'
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import BoardModel from '../models/BoardModel'

const Container = styled.section`
  list-style: none;
  padding: 0.5rem;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`

const boardStyles = css`
  display: block;
  width: 20em;
  height: 10em;

  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.25rem;
  font-weight: 500;

  background: #3498db;
  color: #ecf0f1;
  transition: 0.2s background-color;

  &:hover {
    background: #2980b9;
    cursor: pointer;
  }
`

const Board = styled(Link)`
  ${boardStyles};
`

const BoardNew = styled.a`
  ${boardStyles};

  background: #2ecc71;

  &:hover {
    background: #27ae60;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`

type BoardListProps = {
  boards: BoardModel[]
  onNewBoard: () => void
}

@observer
class BoardList extends React.Component<BoardListProps> {
  render() {
    return (
      <Container>
        {this.props.boards.map(this.renderBoard)}
        <BoardNew onClick={this.props.onNewBoard}>Create New Board...</BoardNew>
      </Container>
    )
  }

  renderBoard = (board: BoardModel) => (
    <Board to={`/board/${board.id}`} key={board.id}>
      {board.title}
    </Board>
  )
}

export default BoardList
