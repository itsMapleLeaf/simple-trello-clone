import { types } from 'mobx-state-tree'

export const TaskModel = types.model({
  id: types.string,
  text: types.string,
})
