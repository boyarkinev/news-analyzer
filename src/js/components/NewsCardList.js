'use strict';
import { BaseComponent } from './BaseComponent';

export class NewsCardList extends BaseComponent {
  constructor(attr, newsCard, sources) {
    super(attr)
    this._newsCard = newsCard
    this._sources = sources
  }

  addNewsCard = (elem) => {
    const card = this._newsCard(elem)
    this._$el.append(card)
  }

  renderCards = (container) => {
    this._sources.forEach(
      elem => this.addNewsCard(elem)
    )
  }

}