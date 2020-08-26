import BaseComponent from './BaseComponent'

export default class CommitCardList extends BaseComponent {
  constructor(selector, commitCard) {
    super(selector)
    this._commitCard = commitCard
  }

  init = (elem) => {
    const card = this._commitCard(elem)
    this._$el.append(card)
  }

  render = (cards) => {
    cards.slice(0, 10).forEach(elem => this.init(elem))
  }
}