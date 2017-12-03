import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { BoardModel } from '../models/BoardModel'
import { StoreInjector } from '../stores'
import { BoardList } from './BoardList'

interface Props {
  boards?: BoardModel[]
  onNewBoard?: () => void
}

const storesToProps: StoreInjector<Props> = stores => ({
  boards: stores.boardStore.boards.values(),

  async onNewBoard() {
    const title = prompt('Board title?')
    if (title) {
      await stores.boardStore.createBoard(title)
    }
  },
})

@inject(storesToProps)
@observer
export class BoardListRoute extends React.Component<Props> {
  render() {
    return <BoardList boards={this.props.boards || []} onNewBoard={this.props.onNewBoard} />
  }
}
