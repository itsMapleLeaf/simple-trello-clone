import { injectGlobal } from 'styled-components'

function applyGlobalStyles() {
  injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: Roboto, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 300;
      margin: 0;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `
}

export default applyGlobalStyles
