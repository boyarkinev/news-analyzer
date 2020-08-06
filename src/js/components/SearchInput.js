import { BaseComponent } from './BaseComponent'

export class SearchInput extends BaseComponent {

  constructor(id) {
    super(id)
  }

  init = () => {
    // const btn = this._$el.querySelector('#search-button')
    console.log(this._$el)
  }
}