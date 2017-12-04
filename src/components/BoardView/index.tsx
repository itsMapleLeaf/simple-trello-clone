import * as React from 'react'
import { BoardModel } from '../../models/BoardModel'
import { TaskList } from '../TaskList'
import { TaskLists, Title } from './styles'

type Props = {
  board: BoardModel
}

export function BoardView({ board }: Props) {
  return (
    <React.Fragment>
      <Title>{board.name}</Title>
      <TaskLists>{board.lists.map(list => <TaskList key={list.id} list={list} />)}</TaskLists>
    </React.Fragment>
  )
}
