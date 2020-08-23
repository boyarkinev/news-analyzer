'use strict'

import '../pages/index.css'

import NewsApi from './modules/NewsApi'
import DataStorage from './modules/DataStorage'

import SearchSection from './components/SearchSection'
import SearchForm from './components/SearchForm'
import NewsCard from './components/NewsCard'
import NewsCardList from './components/NewsCardList'
import Preloader from './components/Preloader'
import NegativeSearchMessage from './components/NegativeSearchMessage'
import FormValidator from './components/FormValidator'
import {errorMessages} from './constants/error-messages'
import ShowElseButton from './components/ShowElseButton'
import { dateTo } from './utils/news-date'


const searchForm = new SearchForm('#search-form', submitHandler) // Компонент инпута
const preloader = new Preloader('#preloader') // Спиннер загрузки
const negativeSearchMessage = new NegativeSearchMessage('#negative-search-message') // Баннер с "Ничего не найдено"
const searchSection = new SearchSection('#search-section') // DOM-контейнер для карточек с новостями
const dataStorage = new DataStorage // Компонент локального хранилища
const newsCard = (...args) => new NewsCard('#news-card-template', ...args).init() // Компонент карточки
const newsCardList = new NewsCardList('.search-results__list', newsCard) // Компонент вывода полученных карточек
const newsApi = new NewsApi // Компонент новостного API
const formValidator = new FormValidator(searchForm)
const showElseButton = new ShowElseButton('#show-else', showElseClickHandler)
const newsDate = dateTo

formValidator.init(errorMessages)
showElseButton.init()

function submitHandler(event) { // Отправляем поисковую фразу
  event.preventDefault()
  newsCardList.clearing()
  searchSection.hide()
  negativeSearchMessage.hide()
  localStorage.clear()
  preloader.show()
  storageTransfer()
}

function storageTransfer() { // Обращаемся к серверу
  formValidator.setSubmitButtonState(false)
  const keyWord = searchForm.getInput().value
  newsApi.getNews(keyWord)
  .then(res => {
    const elems = res.articles
    preloader.hide()
    if (elems.length === 0) {
      dataStorage.init()
      preloader.hide()
      searchSection.hide()
      negativeSearchMessage.show()
    }
    else {
      negativeSearchMessage.hide()
      dataStorage.setArticlesData(elems)
      dataStorage.setKeyWordData(keyWord)
      dataStorage.setNewsDate(newsDate)
      showElseButton.show()
      searchSection.show()
      newsCardList.render(elems)
      formValidator.setSubmitButtonState(true)
    }
    
  })
  .catch((err) => {
    console.log(err)
  })
}

let counter = 1

function showElseClickHandler(event) { // Рендерим карточки на страницу по три штуки
  event.preventDefault()
  preloader.hide()
  let cards = dataStorage.getArticlesData()
  let cardsOnPage = 3
  let start = (++counter -1) * cardsOnPage
  let end = start + cardsOnPage
  let result = cards.slice(start, end)
  
  if (start+3 >= cards.length) {
    showElseButton.hide()
  }
  newsCardList.render(result)
}


document.addEventListener('DOMContentLoaded', event => { // Рендерим 3 карточки после загрузки DOM-дерева и обновляем DOM-объекты
  event.preventDefault()
  dataStorage.getArticlesData()
  formValidator.resetForms()
  formValidator.resetFormAlerts()
  dataStorage.getArticlesData().length === 0 || dataStorage.getKeyWordData().length === 0 ? searchSection.hide() : searchSection.show()
  searchForm.init()
  showElseButton.show()
  searchForm.getInput().value = dataStorage.getKeyWordData()
  newsCardList.render(dataStorage.getArticlesData().slice(0, 3))
  searchForm.getInput().value.length !== 0 ? formValidator.setSubmitButtonState(true) : formValidator.setSubmitButtonState(false)
})

console