'use strict'

const date = new Date()
date.setDate(date.getDate())
const dateTo = date.toISOString().split('T')[0] // Дата самой новой статьи

date.setDate(date.getDate() - 6)
const dateFrom = date.toISOString().split('T')[0] // Дата самой старой статьи

export {dateTo, dateFrom}