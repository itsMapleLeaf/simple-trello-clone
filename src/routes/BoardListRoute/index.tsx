import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { BoardList } from '../../components/BoardList'
import { BoardModel } from '../../models/BoardModel'
import { StoreInjector } from '../../stores'

interface Props {
  boards?: BoardModel[]
  onNewBoard?: () => void
}

const storesToProps: StoreInjector<Props> = stores => ({
  boards: stores.boardStore.boards.values(),

  async onNewBoard() {
    const name = prompt('Board name?')
    if (name) {
      await stores.boardStore.createBoard(name)
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
