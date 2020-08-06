import { BaseComponent } from './BaseComponent';

export class CommitCard extends BaseComponent {

  constructor(id) {

    super(id)
    
  }

  init () {

    const list = this._$el.querySelector('.swiper-container')
    console.log(this._$el)
    
  }

}
