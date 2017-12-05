import * as React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon/index'

export const Wrapper = styled.a`
  opacity: 0.5;
  transition: 0.2s opacity;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

export function DeleteButton(props: Props) {
  return (
    <Wrapper {...props}>
      <Icon name="trash" size="small" />
    </Wrapper>
  )
}
