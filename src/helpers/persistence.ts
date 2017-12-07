import * as localforage from 'localforage'
import { applySnapshot, getSnapshot, IMiddlewareHandler, IStateTreeNode } from 'mobx-state-tree'

export function createPersistence(storageKey: string) {
  async function load(store: IStateTreeNode) {
    const snapshot = await localforage.getItem('boards')
    applySnapshot(store, snapshot)
  }

  const middleware: IMiddlewareHandler = (call, next) => {
    next(call)
    const snapshot = getSnapshot(call.tree)
    localforage.setItem('boards', snapshot)
  }

  return { load, middleware }
}
