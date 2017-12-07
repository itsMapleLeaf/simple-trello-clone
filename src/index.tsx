import 'sanitize.css/sanitize.css'

import { Provider as StoreProvider } from 'mobx-react'
import { addMiddleware, applySnapshot } from 'mobx-state-tree'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { App } from './components/App'
import { createPersistence } from './helpers/persistence'
import { defaultData } from './models'
import { registerServiceWorker } from './registerServiceWorker'
import { stores } from './stores'
import { applyGlobalStyles } from './styles/globalStyles'

function render() {
  const root = (
    <Router history={stores.history}>
      <StoreProvider {...stores}>
        <App />
      </StoreProvider>
    </Router>
  )

  ReactDOM.render(root, document.getElementById('root') as HTMLElement)
}

async function main() {
  registerServiceWorker()
  applyGlobalStyles()
  render()

  const persistence = createPersistence('boards')
  addMiddleware(stores.boardStore, persistence.middleware)

  try {
    await persistence.load(stores.boardStore)
  } catch (error) {
    console.warn('Error loading persisted data:', error)
    console.warn('Applying default data')
    applySnapshot(stores.boardStore, defaultData)
  }

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./components/App', render)
    }

    ;(window as any).stores = stores
  }
}

main().catch(console.error)
