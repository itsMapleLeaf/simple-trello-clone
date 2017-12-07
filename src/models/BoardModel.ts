import { flow, types } from 'mobx-state-tree'
import { generateRandomId } from '../helpers/generateRandomId'
import { TaskListModel } from './TaskListModel'

export const BoardModel = types
  .model({
    id: types.string,
    name: types.string,
    lists: types.array(TaskListModel),
  })
  .actions(self => {
    function rename(name: string) {
      self.name = name
    }

    const createList = flow(function*(name: string) {
      const id: string = yield generateRandomId()
      const list = TaskListModel.create({ id, name, tasks: [] })
      self.lists.push(list)
      return list
    })

    function removeList(id: string) {
      self.lists.replace(self.lists.filter(lists => lists.id !== id))
    }

    return { rename, createList, removeList }
  })
