import BaseComponent from './BaseComponent'
import DataStorage from '../modules/DataStorage'
import {analiticsTimeStamp, analiticsMonthStamp} from '../utils/time-stamp-converter'

export default class Statistics extends BaseComponent {
  constructor(selector, headerMatchCounter) {
    super(selector)
    this._dataStorage = new DataStorage
    this._headerMatchCounter = headerMatchCounter
    this._newsData = this._dataStorage.getArticlesData()
    this._newsKeyWord = this._dataStorage.getKeyWordData()
    this._newsDate = this._dataStorage.getNewsDate()
  }

  init = () => {
    this._newsPerWeek = this._$el.querySelector('#news-per-week')
    this._matchInHeader = this._$el.querySelector('#header-counter')
    this._requestHeader = this._$el.querySelector('#request-header')
    this._month = this._$el.querySelector('#month')
    
    this._requestHeader.textContent = this._newsKeyWord
    this._newsPerWeek.textContent = this._newsData.length
    this._matchInHeader.textContent = this._headerMatchCounter()
    this._month.textContent = "("+`${analiticsMonthStamp(this._newsDate)}`+")"
  }

  diagram = (elem) => {
    this._diagramRow = `
      <li class="diagram__day">
        <p class="diagram__date">${analiticsTimeStamp(elem.date)}</p>
        <figure class="diagram__line" style="width:${elem.count / this._newsData.length * 100}%">
          <figcaption class="diagram__percent">${elem.count}</figcaption>
        </figure>
      </li>
    `
    this._list = this._$el.querySelector('.diagram__days')
    this._list.insertAdjacentHTML('afterbegin', this._diagramRow)
  }

  render = (weeks) => {
    weeks.forEach(elem => this.diagram(elem))
  }
  
}