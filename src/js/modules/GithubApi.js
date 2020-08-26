import GITHUB_API_PARAMS from '../constants/GITHUB_API_PARAMS'

export default class GithubApi {
	
	constructor() {
    this.url = GITHUB_API_PARAMS.URL_GITHUB_API
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