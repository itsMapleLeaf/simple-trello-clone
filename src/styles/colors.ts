import { css } from 'styled-components'

export const blue = '#3498db'
export const blueDark = '#2980b9'

export const green = '#2ecc71'
export const greenDark = '#27ae60'

export const asphalt = '#34495e'
export const asphaltDark = '#2c3e50'

export const clouds = '#ecf0f1'
export const cloudsDark = '#bdc3c7'

export const backgroundColor = blue
export const backgroundColorAlt = blueDark

export const foregroundColor = clouds
export const foregroundColorAlt = cloudsDark

export const background = css`
  background-color: ${blue};
  color: ${clouds};
`

export const backgroundAlt = css`
  background-color: ${blueDark};
  color: ${clouds};
`

export const foreground = css`
  background-color: ${clouds};
  color: ${asphaltDark};
`

export const foregroundAlt = css`
  background-color: ${cloudsDark};
  color: ${asphaltDark};
`
