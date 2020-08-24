'use strict'

import daysList from '../constants/days-list'
import monthsListAnalytics from '../constants/months-list-analytics'

const date = new Date()

function currentDate () {
  const dayOfWeek = date.getDay()
  const dayOfMonth = date.getDate()
  const timeStamp = dayOfMonth + ", " + daysList[dayOfWeek]
  return timeStamp
}

function currentMonth () {
  const month = date.getMonth()
  const monthStamp = monthsListAnalytics[month]
  return monthStamp.toUpperCase()
}

export {currentDate, currentMonth}

// Получаем для страницы аналитики день недели и месяц в нужном формате