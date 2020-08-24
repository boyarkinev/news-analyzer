'use strict'

import '../../pages/analytics.css'
import Statistics from '../components/Statistics'
import DataStorage from '../modules/DataStorage'

(function () {
  
  const weeks = []
  const dataStorage = new DataStorage
  const storageNewsData = dataStorage.getArticlesData()
  const statistics = new Statistics('#statistic', headerMatchCounter, weeks)
  
  // Создаем массив дат за неделю
  const date = new Date(dataStorage.getNewsDate())
  date.setDate(date.getDate())
  weeks.push({date: date.toISOString().split('T')[0], count:0})
  for (let i = 0; i < 6; i++) {
    date.setDate(date.getDate() - 1)
    const day = date.toISOString().split('T')[0]
    weeks.push({date: day, count:0})
  }
  
  function headerMatchCounter() { // Считаем упоминания в заголовках
    let counter = 0
    for (let elem of storageNewsData) {
      if (elem.title.includes(dataStorage.getKeyWordData())) {
        counter++
      }
    }
    return counter
  }
  
  storageNewsData.reduce((acc, el) => { // Собираем массив данных для статистики
    
    acc.forEach(element => {
      if (element.date === el.publishedAt.split('T')[0]) {
        return element.count++
      }
    })
    return acc
  },weeks)
  
  statistics.render(weeks)
  statistics.init()

})()
