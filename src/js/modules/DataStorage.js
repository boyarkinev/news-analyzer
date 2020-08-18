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

  getArticlesData = () => {
    // return JSON.parse(localStorage.getItem('articles'))
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

  // checkStorage = () => {
  //   if (localStorage.getItem('articles')) {
  //     JSON.parse(localStorage.getItem('articles'))
  //   }
  //   else {
  //     this.init()
  //   }
  // }
}