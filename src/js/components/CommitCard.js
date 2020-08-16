'use strict'

import BaseComponent from './BaseComponent'
import timeStampConvert from '../utils/time-stamp-convert'
import githubEmailNormalyze from '../utils/github-email-normalyze';


export default class CommitCard extends BaseComponent {
  constructor(selector, elem) {
    super(selector)
    this._elem = elem
    this._timeStampConvert = timeStampConvert
    this._emailNormalyze = githubEmailNormalyze
    this._date = elem.commit.committer.date
    this._avatar = elem.author.avatar_url
    this._name = elem.commit.committer.name
    this._email = elem.commit.committer.email
    this._text = elem.commit.message
  }

  init = () => {
    this._commitCard = this._$el
    this._commitCard.querySelector('.commit-card__date').textContent = this._timeStampConvert(this._date)
    this._commitCard.querySelector('.commit-card__userpic').src = this._avatar
    this._commitCard.querySelector('.commit-card__usename').textContent = this._name
    this._commitCard.querySelector('.commit-card__email').textContent = this._emailNormalyze(this._email)
    this._commitCard.querySelector('.commit-card__text').textContent = this._text
    return this._commitCard
  }

}
