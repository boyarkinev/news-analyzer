'use strict'

export class BaseComponent {

  constructor(attr) {
    this._$el = document.querySelector(attr)
    this.init()
  }

  init () {}
}