import NEWS_API_PARAMS from '../constants/NEWS_API_PARAMS'
import {dateTo, dateFrom} from '../utils/news-date'

export default class NewsApi {
	
	constructor() {
		this.url = NEWS_API_PARAMS.URL_NEWS_API
		this.apiKey = NEWS_API_PARAMS.KEY_NEWS_API
		this.pageSize = NEWS_API_PARAMS.PAGE_SIZE_NEWS_API
		this.sortBy = NEWS_API_PARAMS.SORT_BY_NEWS_API
		this.language = NEWS_API_PARAMS.LANGUAGE_NEWS_API
	}

	getNews = (keyWord) => {
		return fetch(
			`${this.url}?` + // Адрес сервера
			`q=${keyWord}&` + // Поисковый запрос
			`to=${dateTo}&` + // Дата самой новой статьи
			`from=${dateFrom}&` + // Дата самой старой статьи
			`pageSize=${this.pageSize}&` + // Количество подгруженных с сервера новостей
			`sortBy=${this.sortBy}&` + // Тип сортировки (Сначала новые)
			`language=${this.language}&` + // Язык статей выборки
			`apiKey=${this.apiKey}` // Токен
		)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(`Ошибка: ${res.status}`)
      }
			return res.json()
		})
	}
}
