import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import * as helpers from '../../styles/helpers'
import * as theme from '../../styles/theme'

export const boardStyles = css`
  ${theme.foreground};
  ${theme.shadow};
  ${theme.transition('background-color')};
  ${helpers.flexCenter};

  width: 16rem;
  height: 4rem;
  padding: 1rem;
  font-weight: 500;

  &:hover,
  &:focus {
    ${theme.foregroundAlt};
    cursor: pointer;
  }
`

export const BoardLink = styled(Link)`
  ${boardStyles};
`

export const BoardNew = styled.button`
  ${boardStyles};
  ${theme.success};

  font-weight: 500;
  border: none;

  &:hover,
  &:focus {
    ${theme.successAlt};
  }
`

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  padding: 0.5rem;
  > * {
    margin: 0.5rem;
  }
`
