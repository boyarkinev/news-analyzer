'use strict';

import '../../pages/analytics.css'
import Statistics from '../components/Statistics'
import DataStorage from '../modules/DataStorage'

const week = []
const dataStorage = new DataStorage
const data = dataStorage.getArticlesData()
const statistics = new Statistics('#statistic', headerMatchCounter)

// Создаем массив дат за неделю
const date = new Date(dataStorage.getNewsDate())
date.setDate(date.getDate())
week.push({date: date.toISOString().split('T')[0], count:0})
for (let i = 0; i < 6; i++) {
  date.setDate(date.getDate() - 1)
  const day = date.toISOString().split('T')[0]
  week.push({date: day, count:0})
}


console.log(week)
function headerMatchCounter() { // Считаем упоминания в заголовках
  let counter = 0
  for (let elem of data) {
    if (elem.title.includes(dataStorage.getKeyWordData())) {
      counter++
    }
  }
  return counter
}

data.reduce((acc, el) => { // Собираем массив данных для статистики
  
  acc.forEach(element => {
    if (element.date === el.publishedAt.split('T')[0]) {
      return element.count++
    }
  })
  return acc
},week.reverse())

week.forEach(elem => {
  statistics.diagram(elem)
})

statistics.init()