import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  background: rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.2);
  }
`

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  onConfirm: (text: string) => void
}

@observer
export class QuickInput extends React.Component<Props> {
  @observable text = ''

  @action
  setText(text: string) {
    this.text = text
  }

  handleInput = (event: React.UIEvent<HTMLInputElement>) => {
    this.setText(event.currentTarget.value)
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.props.onConfirm(this.text)
      this.setText('')
    }
  }

  render() {
    const { onConfirm, ...inputProps } = this.props
    return (
      <Input
        {...inputProps}
        value={this.text}
        onInput={this.handleInput}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}
