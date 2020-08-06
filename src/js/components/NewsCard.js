'use strict'

import { BaseComponent } from './BaseComponent';

export class NewsCard extends BaseComponent {
  
  constructor(attr, elem) {
    super(attr)
    this._elem = elem
  }

  init = () => {
    this._card = this._$el.content.cloneNode(true)
    this._card.querySelector('.news-card__link').href = this._elem.link
    this._card.querySelector('.news-card__cover').src = this._elem.image
    this._card.querySelector('.news-card__date').textContent = this._elem.date
    this._card.querySelector('.news-card__title').textContent = this._elem.title
    this._card.querySelector('.news-card__text').textContent = this._elem.text
    this._card.querySelector('.news-card__source').textContent = this._elem.source

    return this._card
  }
}
