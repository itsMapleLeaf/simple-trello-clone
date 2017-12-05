import styled, { css } from 'styled-components'
import { background, backgroundAlt } from '../../styles/colors'

export const shadedSection = css`
  ${backgroundAlt};
  padding: 1rem;
`

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  ${shadedSection};
`

export const Content = styled.section`
  ${background};
  flex-grow: 1;
`

export const Footer = styled.footer`
  ${shadedSection};
`
