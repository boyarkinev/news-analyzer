'use strict'

import '../pages/index.css'
import {NewsCard} from './components/NewsCard'
import {NewsCardList} from './components/NewsCardList'

const sources = [
  {
    link: 'https://lenta.ru/',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    source: 'Лента.ру',
    image: 'https://thumbs.dreamstime.com/b/лес-весны-в-тумане-утра-через-который-лучи-солнца-прорезывают-желт-147135300.jpg'
  },
  {
    link: 'https://meduza.io/',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    source: 'meduza',
    image: 'https://s4.travelask.ru/dlimg/35/351de7b45696bc75ea423dd933f8ec5d.jpg'
  },
  {
    link: 'https://ria.ru/',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    source: 'РИА',
    image: 'https://lh3.googleusercontent.com/Rr4yRjzQzh0g0LcoyR04kFc3LlbSgKcfUCcY_5NYQWMs2sSyzTbyKTEp6tji95bfNw=h500'
  },
  {
    link: 'https://yandex.ru/',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    source: 'Дзен',
    image: 'https://zakagioboi.ru/assets/images/products/Mountain/01.07.13/MOUNTAIN-131462663.jpg'
  },
  {
    link: 'https://zona.media/',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    source: 'Медиазона',
    image: 'https://avatars.mds.yandex.net/get-pdb/1338671/b7459288-e38f-4453-b701-a46fe5968a7b/s1200?webp=false'
  },
  {
    link: 'http://mag.afisha.ru/',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    source: 'Афиша',
    image: 'https://avatars.mds.yandex.net/get-pdb/49816/346a18cb-4ac8-4cba-884f-e999e8e6605d/s1200?webp=false'
  },
]

const newsCard = (...sources) => new NewsCard('#news-card-template', ...sources).init()
const newsCardList = new NewsCardList('.search-results__list', newsCard, sources)

newsCardList.renderCards()