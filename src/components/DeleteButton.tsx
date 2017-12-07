import * as React from 'react'
import styled from 'styled-components'
import { transition } from '../styles/theme'
import { Icon } from './Icon/index'

export const Wrapper = styled.button`
  ${transition('opacity')} opacity: 0.25;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export function DeleteButton(props: Props) {
  return (
    <Wrapper {...props}>
      <Icon name="trash" size="small" />
    </Wrapper>
  )
}
