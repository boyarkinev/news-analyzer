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
import {ERROR_MESSAGES} from './constants/ERROR_MESSAGES'
import ShowElseButton from './components/ShowElseButton'
import { dateTo } from './utils/news-date'

(function () {
  
  const dataStorage = new DataStorage // Компонент локального хранилища
  const searchForm = new SearchForm('#search-form', submitHandler) // Компонент инпута
  const preloader = new Preloader('#preloader') // Спиннер загрузки
  const negativeSearchMessage = new NegativeSearchMessage('#negative-search-message') // Баннер с "Ничего не найдено"
  const searchSection = new SearchSection('#search-section') // DOM-контейнер для карточек с новостями
  const showElseButton = new ShowElseButton('#show-else', showElseClickHandler)
  const newsCard = (...args) => new NewsCard('#news-card-template', ...args).init() // Компонент карточки
  const newsCardList = new NewsCardList('.search-results__list', newsCard, showElseButton) // Компонент вывода полученных карточек
  const newsApi = new NewsApi // Компонент новостного API
  const formValidator = new FormValidator(searchForm)
  const newsDate = dateTo
  
  formValidator.init(ERROR_MESSAGES)
  
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
      } else {
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
      preloader.hide()
      negativeSearchMessage.show()
      negativeSearchMessage.connectionTrouble()
    })
  }

  function submitHandler(event) { // Отправляем поисковую фразу
    event.preventDefault()
    newsCardList.clearing()
    searchSection.hide()
    negativeSearchMessage.hide()
    localStorage.clear()
    preloader.show()
    storageTransfer()
  }
  
  let counter = 1
  function showElseClickHandler(event) { // Рендерим карточки на страницу по три штуки
    event.preventDefault()
    preloader.hide()
    const cards = dataStorage.getArticlesData()
    const cardsOnPage = 3
    const start = (++counter -1) * cardsOnPage
    const end = start + cardsOnPage
    const result = cards.slice(start, end)

    start+3 >= cards.length ? showElseButton.hide() : showElseButton.show()
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
  showElseButton.init()

})()