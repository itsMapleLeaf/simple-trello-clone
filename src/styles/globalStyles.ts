import { injectGlobal } from 'styled-components'

export function applyGlobalStyles() {
  injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: Roboto, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: 300;
    }

    h1 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 300;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }

    ol, ul {
      list-style: none;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  `
}
