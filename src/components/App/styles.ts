import styled from 'styled-components'
import * as theme from '../../styles/theme'

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${theme.primaryAlt};
`

export const Content = styled.section`
  ${theme.primary};
  flex-grow: 1;
`

export const HeaderLinks = styled.nav`
  a:hover {
    text-decoration: underline;
  }
`
