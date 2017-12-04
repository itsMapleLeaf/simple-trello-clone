import styled, { css } from 'styled-components'

export const shadedSection = css`
  background-color: #2c3e50;
  color: #ecf0f1;
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
  flex-grow: 1;
`

export const Footer = styled.footer`
  ${shadedSection};
`
