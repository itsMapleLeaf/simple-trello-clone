import 'sanitize.css/sanitize.css'

import { useStrict } from 'mobx'
import { Provider as StoreProvider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'
import { registerServiceWorker } from './registerServiceWorker'
import { stores } from './stores'
import { applyGlobalStyles } from './styles/globalStyles'

function render() {
  const root = (
    <StoreProvider {...stores}>
      <App />
    </StoreProvider>
  )

  ReactDOM.render(root, document.getElementById('root') as HTMLElement)
}

async function main() {
  useStrict(true)

  const testBoard = await stores.boardStore.createBoard('awesome test board')

  const todo = await testBoard.createList('To Do')
  await todo.createTask('cure cancer')
  await todo.createTask('ponder the meaning of life')

  const done = await testBoard.createList('Done')
  await done.createTask('create a simple trello clone')

  render()
  registerServiceWorker()
  applyGlobalStyles()

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./components/App', render)
    }

    ;(window as any).stores = stores
  }
}

main().catch(console.error)
