import { action, observable } from 'mobx'
import { generateRandomId } from '../helpers/generateRandomId'
import { TaskListModel } from './TaskListModel'

export class BoardModel {
  @observable lists = [] as TaskListModel[]

  constructor(public id: string, public name: string) {}

  @action
  addList(list: TaskListModel) {
    this.lists.push(list)
  }

  @action
  removeList(id: string) {
    this.lists = this.lists.filter(list => list.id !== id)
  }

  async createList(name: string) {
    const id = await generateRandomId()
    const list = new TaskListModel(id, name)
    this.addList(list)
    return list
  }
}
