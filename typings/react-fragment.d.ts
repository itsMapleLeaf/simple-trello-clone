import { Component, ReactNode } from 'react'

declare module 'react' {
  export class Fragment extends Component {
    props: {
      children?: ReactNode
      key?: string | number
    }
  }
}
