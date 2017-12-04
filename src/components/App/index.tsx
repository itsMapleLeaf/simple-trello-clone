import * as React from 'react'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import { ActiveBoardRoute } from '../ActiveBoardRoute'
import { BoardListRoute } from '../BoardListRoute'
import { Container, Content, Footer, Header } from './styles'

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
            <Route exact path="/board/:id" component={ActiveBoardRoute} />
          </Content>
          <Footer>&copy; kingdaro 2017 add github link here or something</Footer>
        </Container>
      </BrowserRouter>
    )
  }
}
