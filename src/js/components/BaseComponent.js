'use strict'

export default class BaseComponent {

  constructor(selector) {
    this._$el = document.querySelector(selector)
    this.init()
  }

  init () {}

  hide = () => {
    this._$el.classList.add('hide')
  }

  show = () => {
    this._$el.classList.remove('hide')
  }
}