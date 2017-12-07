import { flow, types } from 'mobx-state-tree'
import { generateRandomId } from '../helpers/generateRandomId'
import { BoardModel } from './BoardModel'

export const BoardStore = types
  .model({
    boards: types.map(BoardModel),
  })
  .actions(self => {
    const createBoard = flow(function*(name: string) {
      const board = BoardModel.create({ id: yield generateRandomId(), name, lists: [] })
      self.boards.set(board.id, board)
      return board
    })

    function removeBoard(id: string) {
      self.boards.delete(id)
    }

    return {
      createBoard,
      removeBoard,
    }
  })
