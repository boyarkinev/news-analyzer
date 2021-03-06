import BaseComponent from './BaseComponent'

export default class SearchForm extends BaseComponent {
  constructor(selector, submitHandler) {
    super(selector)
    this._submitHandler = submitHandler
  }

  init = () => {
    this._$el.addEventListener('submit', this._submitHandler)
    return this._$el
  }

  getInput = () => {
    return this._$el.querySelector('#search-input')
  }
}