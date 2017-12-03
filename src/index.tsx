import 'sanitize.css/sanitize.css'

import { useStrict } from 'mobx'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import BoardStore from './stores/BoardStore'
import applyGlobalStyles from './styles/globalStyles'

let store = new BoardStore()

function render() {
  const root = <App store={store} />

  ReactDOM.render(root, document.getElementById('root') as HTMLElement)
}

async function main() {
  store.createBoard('board1')
  store.createBoard('board2')
  store.createBoard('board3')

  useStrict(true)
  render()
  registerServiceWorker()
  applyGlobalStyles()

  if (process.env.NODE_ENV === 'production') return

  if (module.hot) {
    module.hot.accept(render)
  }

  ;(window as any).store = store
}

main().catch(console.error)
