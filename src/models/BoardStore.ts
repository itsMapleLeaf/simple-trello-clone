import { types } from 'mobx-state-tree'
import { generateRandomId } from '../helpers/generateRandomId'
import { BoardModel } from './BoardModel'

export const BoardStore = types
  .model({
    boards: types.map(BoardModel),
  })
  .actions(self => {
    function createBoard(name: string) {
      const board = BoardModel.create({ id: generateRandomId(), name, lists: [] })
      self.boards.set(board.id, board)
      return board
    }

    function removeBoard(id: string) {
      self.boards.delete(id)
    }

    return {
      createBoard,
      removeBoard,
    }
  })

export const defaultData = {
  boards: {
    cb64e29c52e12c49: {
      id: 'cb64e29c52e12c49',
      name: 'Awesome Board',
      lists: [
        {
          id: '7e931bb7f06b41e6',
          name: 'To Do',
          tasks: [
            { id: '7ae2ac4a31f5457f', text: 'cure cancer' },
            { id: '1ac101ad75f1b479', text: 'ponder the meaning of life' },
          ],
        },
        {
          id: '9e6cc070340b1410',
          name: 'Done',
          tasks: [{ id: 'be337d7fc8acfd12', text: 'create a simple trello clone' }],
        },
      ],
    },
  },
}
