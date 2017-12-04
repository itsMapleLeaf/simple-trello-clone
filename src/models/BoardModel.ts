import { action, observable } from 'mobx'
import { generateRandomId } from '../helpers/generateRandomId'
import { ListModel } from './ListModel'

export class BoardModel {
  @observable lists = [] as ListModel[]

  constructor(public id: string, public name: string) {}

  @action
  addList(list: ListModel) {
    this.lists.push(list)
  }

  @action
  removeList(id: string) {
    this.lists = this.lists.filter(list => list.id !== id)
  }

  async createList(name: string) {
    const id = await generateRandomId()
    const list = new ListModel(id, name)
    this.addList(list)
    return list
  }
}
