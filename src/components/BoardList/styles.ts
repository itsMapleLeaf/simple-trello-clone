import { css } from 'styled-components'
import * as helpers from '../../styles/helpers'
import * as theme from '../../styles/theme'

export const boardStyles = css`
  ${theme.foreground};
  ${theme.shadow};
  ${helpers.flexCenter};

  width: 16em;
  height: 4em;
  padding: 1rem;
  font-weight: 500;
  transition: 0.2s background-color;

  &:hover {
    ${theme.foregroundAlt};
    cursor: pointer;
  }
`
