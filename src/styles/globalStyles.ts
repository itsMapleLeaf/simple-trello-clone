import { injectGlobal } from 'styled-components'
import { asphaltDark } from './colors'

export function applyGlobalStyles() {
  injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: Roboto, sans-serif;
      font-size: 18px;
      color: ${asphaltDark};
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      margin: 0;
      cursor: text;
    }

    h1 {
      font-weight: 300;
    }

    a {
      color: inherit;
      text-decoration: inherit;

      &, & > * {
        cursor: pointer;
      }
    }

    ol, ul {
      list-style: none;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  `
}
