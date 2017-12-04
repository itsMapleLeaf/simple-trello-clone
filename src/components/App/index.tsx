import * as React from 'react'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import { BoardListRoute } from '../BoardListRoute'
import { BoardRoute } from '../BoardRoute'
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
            <Route exact path="/board/:id" component={BoardRoute} />
          </Content>
          <Footer>&copy; kingdaro 2017 add github link here or something</Footer>
        </Container>
      </BrowserRouter>
    )
  }
}
