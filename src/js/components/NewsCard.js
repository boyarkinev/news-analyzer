'use strict'

import BaseComponent from './BaseComponent'
import timeStampConvert from '../utils/time-stamp-convert'
import newsTextCorrection from '../utils/news-text-correction'

export default class NewsCard extends BaseComponent {
  
  constructor(selector, elem) {
    super(selector)
    this._elem = elem
    this._timeStampConvert = timeStampConvert
    this._newsTextCorrection = newsTextCorrection
  }

  init = () => {
    this._card = this._$el.content.cloneNode(true)
    this._card.querySelector('.news-card__link').href = this._elem.url
    this._card.querySelector('.news-card__image').style.backgroundImage = `url(${this._elem.urlToImage})`
    this._card.querySelector('.news-card__date').textContent = this._timeStampConvert(this._elem.publishedAt)
    this._card.querySelector('.news-card__title').textContent = this._elem.title
    this._card.querySelector('.news-card__text').textContent = this._newsTextCorrection(this._elem.description)
    this._card.querySelector('.news-card__source').textContent = this._elem.source.name
    return this._card
  }
}