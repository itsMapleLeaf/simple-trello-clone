import styled from 'styled-components'

const elementSpacing = '0.5rem'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  padding: ${elementSpacing};
  > * {
    margin: ${elementSpacing};
  }
`
