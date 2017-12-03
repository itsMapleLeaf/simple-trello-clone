import { observer } from 'mobx-react'
import * as React from 'react'
import BoardModel from '../models/BoardModel'

type Props = {
  board?: BoardModel
}

@observer
class BoardRoute extends React.Component<Props> {
  render() {
    const { board } = this.props
    if (board) {
      return <h1>viewing board {board.title}</h1>
    }
    return <h1>board not found</h1>
  }
}

export default BoardRoute
