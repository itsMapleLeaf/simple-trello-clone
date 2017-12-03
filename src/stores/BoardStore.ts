import { action, observable } from 'mobx'
import generateRandomId from '../helpers/generateRandomId'
import BoardModel from '../models/BoardModel'

export default class BoardStore {
  boards = observable.map<BoardModel>()

  @action
  addBoard(board: BoardModel) {
    this.boards.set(board.id, board)
  }

  @action
  removeBoard(id: string) {
    this.boards.delete(id)
  }

  async createBoard(title: string) {
    const board = new BoardModel(await generateRandomId(), title)
    this.addBoard(board)
  }
}
