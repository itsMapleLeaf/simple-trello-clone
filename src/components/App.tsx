import * as React from 'react'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { BoardListRoute } from './BoardListRoute'
import { BoardRoute } from './BoardRoute'

const shadedSection = css`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
`

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  ${shadedSection};
`

const Content = styled.section`
  flex-grow: 1;
`

const Footer = styled.footer`
  ${shadedSection};
`

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header>
            <Link to="/">
              <h1>simple trello clone</h1>
            </Link>
          </Header>
          <Content>
            <Route exact path="/" render={() => <Redirect to="/boards" push={false} />} />
            <Route exact path="/boards" component={BoardListRoute} />
            <Route exact path="/board/:id" component={BoardRoute} />
          </Content>
          <Footer>&copy; kingdaro 2017 add github link here or something</Footer>
        </Container>
      </BrowserRouter>
    )
  }
}
