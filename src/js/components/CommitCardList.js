'use strict'

import BaseComponent from './BaseComponent'

export default class CommitCardList extends BaseComponent {
  constructor(attr, commitCard) {
    super(attr)
    this._commitCard = commitCard
  }

  init = (elem) => {
    const card = this._commitCard(elem)
    this._$el.append(card)
  }

  render = (res) => {
    res.forEach(elem => this.init(elem))
  }
}