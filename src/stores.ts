import { Store } from './store.new'

// mock store
const store = Store.create({
  boards: {
    cb64e29c52e12c49: {
      id: 'cb64e29c52e12c49',
      name: 'awesome test board',
      lists: [
        {
          id: '7e931bb7f06b41e6',
          name: 'To Do',
          tasks: [
            { id: '7ae2ac4a31f5457f', text: 'cure cancer' },
            { id: '1ac101ad75f1b479', text: 'ponder the meaning of life' },
          ],
        },
        {
          id: '9e6cc070340b1410',
          name: 'Done',
          tasks: [{ id: 'be337d7fc8acfd12', text: 'create a simple trello clone' }],
        },
      ],
    },
  },
})

export const stores = {
  boardStore: store,
}

export type Stores = typeof stores

// custom injection type to reduce boilerplate
export type StoreInjector<Props> = (stores: Stores, props: Props) => Partial<Props>
