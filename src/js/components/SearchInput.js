'use strict'

import BaseComponent from './BaseComponent'

export default class SearchInput extends BaseComponent {

  constructor(attr, storageTransfer) {
    super(attr)
  }

  init = () => {
    this._input = this._$el.querySelector('#search-input')
    this._button = this._$el.querySelector('#search-button')
    return this._$el
  }
}