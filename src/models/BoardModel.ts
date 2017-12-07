import { types } from 'mobx-state-tree'
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

    function createList(name: string) {
      const id = generateRandomId()
      const list = TaskListModel.create({ id, name, tasks: [] })
      self.lists.push(list)
      return list
    }

    function removeList(id: string) {
      self.lists.replace(self.lists.filter(lists => lists.id !== id))
    }

    return { rename, createList, removeList }
  })
