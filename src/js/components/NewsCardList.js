'use strict'

import BaseComponent from './BaseComponent'

export default class NewsCardList extends BaseComponent {
  constructor(selector, newsCard) {
    super(selector)
    this._newsCard = newsCard
  }

  init = (elem) => {
    const card = this._newsCard(elem)
    this._$el.append(card)
  }

  render = (elems) => {
    const cardsShown = 3
    elems.slice(0, cardsShown).forEach(elem => this.init(elem))
  }

  clearing = () => {
    this._$el.innerHTML = ''
  }
}