// 'use strict'

import { BaseComponent } from './BaseComponent';

export default class NewsCard extends BaseComponent {
  
  constructor(elem, selector) {
    super(selector)
    this._elem = elem
  }

  init = () => {
    this._card = this._$el.content.querySelector('.news-card').cloneNode(true)
    this._card.querySelector('.news-card__link').href = this._elem.url
    this._card.querySelector('.news-card__image').style.backgroundImage = `url(${this._elem.urlToImage})`
    this._card.querySelector('.news-card__date').textContent = this._elem.publishedAt
    this._card.querySelector('.news-card__title').textContent = this._elem.title
    this._card.querySelector('.news-card__text').textContent = this._elem.description
    this._card.querySelector('.news-card__source').textContent = this._elem.name
    return this._card
  }
}
