import ListModel from './ListModel'

export default class BoardModel {
  lists = [] as ListModel[]

  constructor(public id: string, public title: string) {}
}
