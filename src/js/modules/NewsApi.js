'use strict'

// import NewsApiParams from '../constants/news-api-params'
import {dateTo, dateFrom} from '../constants/news-date'

export default class NewsApi {
	
	constructor(NewsApiParams) {
		this.url = NewsApiParams.URL_NEWS_API
		this.apiKey = NewsApiParams.KEY_NEWS_API
		this.pageSize = NewsApiParams.PAGE_SIZE_NEWS_API
		this.sortBy = NewsApiParams.SORT_BY_NEWS_API
		this.language = NewsApiParams.LANGUAGE_NEWS_API
	}

	getCards = () => {
		return fetch(
			`${this.url}?` +
			`q=Karoq&` +
			`to=${dateTo}&` + // Дата самой новой статьи
			`from=${dateFrom}&` + // Дата самой старой статьи
			`pageSize=${this.pageSize}&` + // Количество подгруженных с сервера новостей
			`sortBy=${this.sortBy}&` + // Тип сортировки (Сначала новые)
			`language=${this.language}&` + // Язык статей выборки
			`apiKey=${this.apiKey}`
		)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(`Ошибка: ${res.status}`)
      }
			return res.json();
		});
	};
}
