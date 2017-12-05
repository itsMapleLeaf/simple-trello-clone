import { action, observable } from 'mobx'
import { generateRandomId } from '../helpers/generateRandomId'
import { TaskModel } from './TaskModel'

export class TaskListModel {
  @observable tasks = [] as TaskModel[]

  constructor(public id: string, public name: string) {}

  @action
  addTask(task: TaskModel) {
    this.tasks.push(task)
  }

  @action
  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  async createTask(text: string) {
    if (text.trim() === '') return

    const id = await generateRandomId()
    const task = new TaskModel(id, text)
    this.addTask(task)
    return task
  }
}
