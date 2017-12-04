import { css } from 'styled-components'

export const boardStyles = css`
  width: 20em;
  height: 10em;
  padding: 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  background: #3498db;
  color: #ecf0f1;
  transition: 0.2s background-color;

  &:hover {
    background: #2980b9;
    cursor: pointer;
  }
`
