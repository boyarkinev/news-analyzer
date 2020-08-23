'use strict'

import BaseComponent from './BaseComponent'
import {cardTimeStamp} from '../utils/time-stamp-converter'
import githubEmailNormalyze from '../utils/github-email-normalyze'


export default class CommitCard extends BaseComponent {
  constructor(selector, elem) {
    super(selector)
    this._elem = elem
    this._cardTimeStamp = cardTimeStamp
    this._emailNormalyze = githubEmailNormalyze
    this._date = elem.commit.committer.date
    this._avatar = elem.author.avatar_url
    this._name = elem.commit.committer.name
    this._email = elem.commit.committer.email
    console.log(this._email)
    this._text = elem.commit.message
  }

  init = () => {
    this._card = this._$el.content.cloneNode(true)
    this._card.querySelector('.commit-card__date').textContent = this._cardTimeStamp(this._date)
    this._card.querySelector('.commit-card__userpic').src = this._avatar
    this._card.querySelector('.commit-card__usename').textContent = this._name
    this._card.querySelector('.commit-card__email').textContent = this._emailNormalyze(this._email)
    this._card.querySelector('.commit-card__text').textContent = this._text

    return this._card
  }

}
