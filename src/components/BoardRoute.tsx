import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { BoardModel } from '../models/BoardModel'
import { StoreInjector } from '../stores'

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
export class BoardRoute extends React.Component<Props> {
  render() {
    const { board } = this.props
    if (board) {
      return <h1>{board.title}</h1>
    }
    return <h1>board not found</h1>
  }
}
