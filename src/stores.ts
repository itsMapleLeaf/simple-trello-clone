import { BoardStore } from './stores/BoardStore'

export const stores = {
  boardStore: new BoardStore(),
}

export type Stores = typeof stores
