'use strict'

import BaseComponent from './BaseComponent'

export default class NewsCardList extends BaseComponent {
  constructor(attr, newsCard, dataStorage) {
    super(attr)
    this._newsCard = newsCard
    this._dataStorage = dataStorage.getData()
  }

  init = (elem) => {
    const card = this._newsCard(elem)
    this._$el.append(card)
  }

  render = (elems) => {
    this._$el.innerHTML = ''
    elems.forEach(elem => this.init(elem))
  }
}