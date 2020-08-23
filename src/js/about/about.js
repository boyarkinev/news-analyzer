'use strict';

import '../../pages/about.css'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/bundle'
import CommitCard from '../components/CommitCard'
import CommitCardList from '../components/CommitCardList'
import GithubApi from '../modules/GithubApi'
import SliderParams from '../constants/slider-params';

const commitCard = (...args) => new CommitCard('#commit-card-template', ...args).init()
const commitCardList = new CommitCardList('#slider-wrapper', commitCard)
const githubApi = new GithubApi

githubApi.getCommits()
  .then(res => {
    commitCardList.render(res)
    let slider = new Swiper('.slider__container', SliderParams)
  })
  .catch((err) => {
    console.log(err)
  })

