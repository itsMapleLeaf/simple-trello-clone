import createHashHistory from 'history/createHashHistory'
import { BoardStore } from './models'

const boardStore = BoardStore.create({ boards: {} })

export const stores = {
  boardStore,
  history: createHashHistory(),
}

export type Stores = typeof stores

// custom injection type to reduce boilerplate
export type StoreInjector<Props> = (stores: Stores, props: Props) => Partial<Props>
