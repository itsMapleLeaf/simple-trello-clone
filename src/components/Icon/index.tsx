import * as React from 'react'
import styled from 'styled-components'
import * as icons from './icons'

type IconName = keyof typeof icons
type IconSize = keyof typeof sizes

type Props = {
  name: IconName
  size?: IconSize
}

const sizes = {
  small: 24,
  normal: 36,
  large: 48,
}

const resolveSize = (props: Props) => sizes[props.size || 'normal']

const Wrapper = styled.span`
  svg {
    width: ${resolveSize}px;
    height: ${resolveSize}px;
  }
`

export function Icon(props: Props) {
  const IconComponent = icons[props.name]
  return (
    <Wrapper {...props}>
      <IconComponent />
    </Wrapper>
  )
}
