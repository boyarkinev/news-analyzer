'use strict'

import monthsList from '../constants/months-list'
import daysList from '../constants/days-list'
import monthsListAnalytics from '../constants/months-list-analytics'

function cardTimeStamp (data) {
  const date = data.substr(0, 10)
  const year = date.substr(0, 4)
  const month = date.substr(5, 2)
  const day = date.substr(8)
  const dateStamp = day + " " + monthsList[month] + ", " + year
  return dateStamp
}
// Форматируем дату в карточках новостей и коммитов

function analiticsTimeStamp (data) {
  const fullDate = new Date(data)
  const date = fullDate.toISOString().split('T')[0]
  const day = date.substr(8)
  const weekDay = fullDate.getDay()
  const dayStamp = [day] + ", " + daysList[weekDay]
  return dayStamp
}
// Форматируем дату на странице аналитики

function analiticsMonthStamp (data) {
  const fullDate = new Date(data)
  const month = fullDate.getMonth()
  const monthStamp = monthsListAnalytics[month]
  return monthStamp
}

export {cardTimeStamp, analiticsTimeStamp, analiticsMonthStamp}

