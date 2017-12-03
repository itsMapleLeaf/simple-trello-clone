import { observer } from 'mobx-react'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { css } from 'styled-components'
import BoardStore from '../stores/BoardStore'
import BoardListRoute from './BoardListRoute'
import BoardRoute from './BoardRoute'
import IndexRoute from './IndexRoute'

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

  h1 {
    margin: 0;
  }
`

const Content = styled.section`
  flex-grow: 1;
`

const Footer = styled.footer`
  ${shadedSection};
`

type AppProps = {
  store: BoardStore
}

@observer
export default class App extends React.Component<AppProps> {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header>
            <h1>simple trello clone</h1>
          </Header>
          <Content>
            <Route exact path="/" component={IndexRoute} />
            <Route exact path="/boards" render={this.renderBoardListRoute} />
            <Route exact path="/board/:id" render={this.renderBoardRoute} />
          </Content>
          <Footer>&copy; kingdaro 2017 add github link here or something</Footer>
        </Container>
      </BrowserRouter>
    )
  }

  private renderBoardListRoute = () => {
    return <BoardListRoute boards={this.props.store.boards} />
  }

  private renderBoardRoute = ({ match }: RouteComponentProps<{ id: string }>) => {
    return <BoardRoute board={this.props.store.boards.get(match.params.id)} />
  }
}
