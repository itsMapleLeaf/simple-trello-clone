import styled from 'styled-components'
import { asphaltDark, clouds } from '../../styles/colors'

export const Container = styled.article`
  width: 16rem;
  /* min-height: 10rem; */
  padding: 0.5rem;
  background-color: ${asphaltDark};
  color: ${clouds};
`

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`

export const Tasks = styled.ul`
  > * + * {
    margin-top: 0.5rem;
  }
`
