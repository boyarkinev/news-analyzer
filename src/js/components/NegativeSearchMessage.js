import BaseComponent from './BaseComponent'

export default class NegativeSearchMessage extends BaseComponent {
  constructor(selector) {
    super(selector)
    this._messageHeader = this._$el.querySelector('#negative-answer-header')
    this._messageText = this._$el.querySelector('#negative-answer-text')
  }

  negativeSearch = () => {
    this._messageHeader.textContent = 'Ничего не найдено'
    this._messageText.textContent = 'К сожалению, по вашему запросу ничего не найдено.'
  }

  connectionTrouble = () => {
    this._messageHeader.textContent = 'Сервер недоступен'
    this._messageText.textContent = 'Проверьте сетевое соединение и повторите попытку.'
  }
}
