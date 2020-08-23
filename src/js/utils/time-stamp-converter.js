'use strict'

import MONTHS_LIST from '../constants/MONTHS_LIST'
import DAYS_LIST from '../constants/DAYS_LIST'
import MONTHS_LIST_ALALYTICS from '../constants/MONTHS_LIST_ALALYTICS'

function cardTimeStamp (data) {
  const date = data.substr(0, 10)
  const year = date.substr(0, 4)
  const month = date.substr(5, 2)
  const day = date.substr(8)
  const dateStamp = day + " " + MONTHS_LIST[month] + ", " + year
  return dateStamp
}
// Форматируем дату в карточках новостей и коммитов

function analiticsTimeStamp (data) {
  const fullDate = new Date(data)
  const date = fullDate.toISOString().split('T')[0]
  const day = date.substr(8)
  const weekDay = fullDate.getDay()
  const dayStamp = [day] + ", " + DAYS_LIST[weekDay]
  return dayStamp
}
// Форматируем дату на странице аналитики

function analiticsMonthStamp (data) {
  const fullDate = new Date(data)
  const month = fullDate.getMonth()
  const monthStamp = MONTHS_LIST_ALALYTICS[month]
  return monthStamp
}

export {cardTimeStamp, analiticsTimeStamp, analiticsMonthStamp}

// Меняем формат вывода дат на страницах

