import { computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { BoardView } from '../../components/BoardView'
import { BoardModel } from '../../models/BoardModel'
import { StoreInjector } from '../../stores'
import { Container } from './styles'

type BoardRouteMatch = { id: string }

type Props = RouteComponentProps<BoardRouteMatch> & {
  board?: BoardModel
}

const storesToProps: StoreInjector<Props> = (stores, props) => {
  const board = stores.boardStore.boards.get(props.match.params.id)
  return { board }
}

@inject(storesToProps)
@observer
export class ActiveBoardRoute extends React.Component<Props> {
  render() {
    return <Container>{this.content}</Container>
  }

  @computed
  private get content() {
    const { board } = this.props
    if (board) {
      return <BoardView board={board} onNewList={board.createList.bind(board)} />
    }
    return <h1>board not found</h1>
  }
}
