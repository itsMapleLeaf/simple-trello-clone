import { computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Delete } from '../../icons/Delete'
import { BoardModel } from '../../models/BoardModel'
import { StoreInjector } from '../../stores'
import {
  BoardName,
  Container,
  Task,
  TaskContainer,
  TaskDelete,
  TaskList,
  TaskListContainer,
  TaskListTitle,
  TaskText,
} from './styles'

type BoardRouteMatch = { id: string }

type Props = RouteComponentProps<BoardRouteMatch> & {
  board?: BoardModel
}

const storesToProps: StoreInjector<Props> = (stores, props) => {
  const board = stores.boardStore.boards.get(props.match.params.id)
  return { board }
}

@inject(storesToProps)
@observer
export class ActiveBoardRoute extends React.Component<Props> {
  render() {
    return <Container>{this.content}</Container>
  }

  @computed
  private get content() {
    const { board } = this.props
    if (board) {
      return (
        <React.Fragment>
          <BoardName>{board.name}</BoardName>
          <TaskListContainer>
            {board.lists.map(list => (
              <TaskList key={list.id}>
                <TaskListTitle>{list.name}</TaskListTitle>
                <TaskContainer>
                  {list.tasks.map(task => (
                    <Task key={task.id}>
                      <TaskText>{task.text}</TaskText>
                      <TaskDelete>
                        <Delete size={24} />
                      </TaskDelete>
                    </Task>
                  ))}
                </TaskContainer>
              </TaskList>
            ))}
          </TaskListContainer>
        </React.Fragment>
      )
    }
    return <h1>board not found</h1>
  }
}
