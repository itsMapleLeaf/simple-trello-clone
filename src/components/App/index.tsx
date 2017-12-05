import * as React from 'react'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import { ActiveBoardRoute } from '../../routes/ActiveBoardRoute'
import { BoardListRoute } from '../../routes/BoardListRoute'
import { Container, Content, Header, HeaderLinks } from './styles'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header>
            <Link to="/">
              <h1>simple trello clone</h1>
            </Link>
            <HeaderLinks>
              <a href="https://github.com/kingdaro/simple-trello-clone" target="_blank">
                View Source on GitHub
              </a>
            </HeaderLinks>
          </Header>
          <Content>
            <Route exact path="/" render={() => <Redirect to="/boards" push={false} />} />
            <Route exact path="/boards" component={BoardListRoute} />
            <Route exact path="/board/:id" component={ActiveBoardRoute} />
          </Content>
        </Container>
      </BrowserRouter>
    )
  }
}
