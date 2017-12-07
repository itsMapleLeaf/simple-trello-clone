import 'sanitize.css/sanitize.css'

import { Provider as StoreProvider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'
import { registerServiceWorker } from './registerServiceWorker'
import { Store } from './store.new'
import { stores } from './stores'
import { applyGlobalStyles } from './styles/globalStyles'

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

function render() {
  const root = (
    <StoreProvider {...{ boardStore: store }}>
      <App />
    </StoreProvider>
  )

  ReactDOM.render(root, document.getElementById('root') as HTMLElement)
}

async function main() {
  render()
  registerServiceWorker()
  applyGlobalStyles()

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./components/App', render)
    }

    ;(window as any).stores = stores
    ;(window as any).store = store
  }
}

main().catch(console.error)
