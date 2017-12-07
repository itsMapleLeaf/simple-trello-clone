import { flow, types } from 'mobx-state-tree'
import { generateRandomId } from '../helpers/generateRandomId'
import { TaskModel } from './TaskModel'

export const TaskListModel = types
  .model({
    id: types.string,
    name: types.string,
    tasks: types.array(TaskModel),
  })
  .actions(self => {
    function rename(name: string) {
      self.name = name
    }

    const createTask = flow(function*(text: string) {
      const id: string = yield generateRandomId()
      const task = TaskModel.create({ id, text })
      self.tasks.push(task)
      return task
    })

    function removeTask(id: string) {
      self.tasks.replace(self.tasks.filter(task => task.id !== id))
    }

    return { rename, createTask, removeTask }
  })
