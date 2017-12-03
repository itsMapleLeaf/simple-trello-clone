import 'sanitize.css/sanitize.css'

import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'
import { registerServiceWorker } from './registerServiceWorker'
import { stores } from './stores'
import { applyGlobalStyles } from './styles/globalStyles'

function render() {
  const root = (
    <Provider {...stores}>
      <App />
    </Provider>
  )

  ReactDOM.render(root, document.getElementById('root') as HTMLElement)
}

async function main() {
  await Promise.all([
    stores.boardStore.createBoard('board1'),
    stores.boardStore.createBoard('board2'),
    stores.boardStore.createBoard('board3'),
  ])

  useStrict(true)
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
