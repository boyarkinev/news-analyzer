import BaseComponent from './BaseComponent'

export default class ShowElseButton extends BaseComponent {
  constructor (selector, showElseClickHandler) {
    super(selector)
    this._showElseClickHandler = showElseClickHandler
  }

  init = () => {
    this._$el.addEventListener('click', this._showElseClickHandler)
  }
}