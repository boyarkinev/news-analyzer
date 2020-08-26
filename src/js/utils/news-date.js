const date = new Date()
date.setDate(date.getDate())
const dateTo = date.toISOString().split('T')[0] // Дата самой новой статьи

const searchPeriod = 6
date.setDate(date.getDate() - searchPeriod)
const dateFrom = date.toISOString().split('T')[0] // Дата самой старой статьи

export {dateTo, dateFrom}

// Изменяем формат даты для обращения к api новостей и вывода на страницы