import { ListModel } from './ListModel'

export class BoardModel {
  lists = [] as ListModel[]

  constructor(public id: string, public title: string) {}
}
