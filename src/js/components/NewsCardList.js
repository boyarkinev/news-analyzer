'use strict'

import { BaseComponent } from './BaseComponent';

export default class NewsCardList extends BaseComponent {
  constructor(newsCard, attr) {
    super(attr)
    this._newsCard = newsCard
    // this._sources = sources
  }

  init = (elem) => {
    const card = this._newsCard(elem)
    this._$el.append(card)
  }

  // renderCards = () => {
  //   this._sources.forEach(
  //     elem => this.init(elem)
  //   )
  // }

}