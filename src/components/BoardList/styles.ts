import { css } from 'styled-components'
import { foreground, foregroundAlt } from '../../styles/colors'
import { flexCenter } from '../../styles/helpers'
import { shadow } from '../../styles/theme'

export const boardStyles = css`
  ${foreground};
  ${flexCenter};
  ${shadow};

  width: 16em;
  height: 4em;
  padding: 1rem;
  font-weight: 500;
  transition: 0.2s background-color;

  &:hover {
    ${foregroundAlt};
    cursor: pointer;
  }
`
