const NewsApiUrl = NODE_ENV === 'development' ? 'http://newsapi.org/v2/everything' : ' https://nomoreparties.co/v2/everything'

const NEWS_API_PARAMS = {
  URL_NEWS_API: NewsApiUrl,
  KEY_NEWS_API: '887a5ec918604f2b9b1a9c9d2a1ae13b',
  PAGE_SIZE_NEWS_API: 100,
  SORT_BY_NEWS_API: 'publishedAt',
  LANGUAGE_NEWS_API: 'ru',
}

export default NEWS_API_PARAMS

// Параметры доступа к api новостного сервера