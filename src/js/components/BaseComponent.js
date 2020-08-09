'use strict'

export class BaseComponent {

  constructor(selector) {
    this._$el = document.querySelector(selector)
    this.init()
  }

  init () {}
}