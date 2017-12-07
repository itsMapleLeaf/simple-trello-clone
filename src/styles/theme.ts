import { css } from 'styled-components'
import * as colors from './colors'

export const shadow = css`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export const transition = (...properties: string[]) => css`
  transition: 0.2s ${properties.join(' ')};
`

export const foreground = css`
  background-color: ${colors.clouds};
  color: ${colors.asphaltDark};
`

export const foregroundAlt = css`
  background-color: ${colors.cloudsDark};
  color: ${colors.asphaltDark};
`

export const primary = css`
  background-color: ${colors.blue};
  color: ${colors.clouds};
`

export const primaryAlt = css`
  background-color: ${colors.blueDark};
  color: ${colors.clouds};
`

export const success = css`
  background-color: ${colors.green};
  color: ${colors.clouds};
`

export const successAlt = css`
  background-color: ${colors.greenDark};
  color: ${colors.clouds};
`

export const danger = css`
  background-color: ${colors.red};
  color: ${colors.clouds};
`

export const dangerAlt = css`
  background-color: ${colors.redDark};
  color: ${colors.clouds};
`
