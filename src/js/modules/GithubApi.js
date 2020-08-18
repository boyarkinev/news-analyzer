'use strict'

import GithubApiParams from '../constants/github-api-params'

export default class GithubApi {
	
	constructor() {
    this.url = GithubApiParams.URL_GITHUB_API
	}

	getCommits = () => {
		return fetch(this.url) // Адрес сервера
		.then(res => {
			if (!res.ok) {
				return Promise.reject(`Ошибка: ${res.status}`)
      }
			return res.json()
		})
	}
}