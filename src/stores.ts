import BoardStore from './stores/BoardStore'

const stores = {
  boardStore: new BoardStore(),
}

export default stores
export type Stores = typeof stores
