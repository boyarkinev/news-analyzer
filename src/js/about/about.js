'use strict'

import '../../pages/about.css'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/bundle'
import CommitCard from '../components/CommitCard'
import CommitCardList from '../components/CommitCardList'
import GithubApi from '../modules/GithubApi'
import SLIDER_PARAMS from '../constants/SLIDER_PARAMS'

(function () {

const commitCard = (...args) => new CommitCard('#commit-card-template', ...args).init()
const commitCardList = new CommitCardList('#slider-wrapper', commitCard)
const githubApi = new GithubApi

githubApi.getCommits() // Получаем данные с сервера github, рендерим в слайдер
  .then(res => {
    commitCardList.render(res)
    let slider = new Swiper('.slider__container', SLIDER_PARAMS)
  })
  .catch((err) => {
    alert(err)
  })

})()
