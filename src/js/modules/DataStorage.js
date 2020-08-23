'use strict'

export default class DataStorage {
  constructor (storageTransfer) {
    this._storageTransfer = storageTransfer
  }

  init = () => {
    let storageArray = []
    localStorage.setItem('articles', JSON.stringify(storageArray))
    localStorage.setItem('keyWord', JSON.stringify(storageArray))
  }

  setArticlesData = (elems) => {
    localStorage.setItem('articles', JSON.stringify(elems))
  }
  
  setKeyWordData = (elems) => {
    localStorage.setItem('keyWord', JSON.stringify(elems))
  }
  
  setNewsDate = (elems) => {
    localStorage.setItem('newsDate', JSON.stringify(elems))
  }

  getArticlesData = () => {
    if (localStorage.getItem('articles')) {
      return JSON.parse(localStorage.getItem('articles'))
    }
    else {
      this.init()
    }
  }

  getKeyWordData = () => {
    return JSON.parse(localStorage.getItem('keyWord'))
  }

  getNewsDate = () => {
    return JSON.parse(localStorage.getItem('newsDate'))
  }

}