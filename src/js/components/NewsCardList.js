'use strict'

import BaseComponent from './BaseComponent'

export default class NewsCardList extends BaseComponent {
  constructor(attr, newsCard) {
    super(attr)
    this._newsCard = newsCard
  }

  init = (elem) => {
    const card = this._newsCard(elem)
    this._$el.append(card)
  }

  render = (elems) => {
    this.clearing()
    elems.forEach(elem => this.init(elem))
  }

  clearing = () => {
    this._$el.innerHTML = ''
  }
}