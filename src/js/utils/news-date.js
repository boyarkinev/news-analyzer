'use strict'

const date = new Date()
const dateTo = date.toISOString().substr(0, 10) // Дата самой новой статьи

date.setDate(date.getDate() - 7)
const dateFrom = date.toISOString().substr(0, 10) // Дата самой старой статьи

export {dateTo, dateFrom}