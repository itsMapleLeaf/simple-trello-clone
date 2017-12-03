import { BoardStore } from './stores/BoardStore'

export const stores = {
  boardStore: new BoardStore(),
}

export type Stores = typeof stores

// custom injection type to reduce boilerplate
export type StoreInjector<Props> = (stores: Stores, props: Props) => Partial<Props>
