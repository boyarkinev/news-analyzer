'use strict'
import {errorMessages} from '../constants/error-messages'
export default class FormValidator {
  constructor(form) {
    this._form = form.init()
  }

  init = (errorMessages) => {
    this.handlerInputForm = this.handlerInputForm.bind(this)
    this.submitBtn = this._form.querySelector('#search-button')
    this.alert = this._form.querySelector('.alert-message')
    this.setEventListeners()
  }

  checkInputValidity = (input) => {
    const alertElement = this._form.querySelector('.alert-message')
    input.setCustomValidity('')

    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(errorMessages.wrongLength)
      alertElement.textContent = input.validationMessage
      return false
    }
    if (input.value.trim() === '') {
      input.setCustomValidity(errorMessages.notOnlySpace)
      input.value = input.value.trim()
      alertElement.textContent = input.validationMessage
      return false
    }
    else {
      alertElement.textContent = ''
      return input.checkValidity()
    }
  }

  setSubmitButtonState = (state) => {
    if (state) {
      this.submitBtn.disabled = false
    } else {
      this.submitBtn.disabled = true
    }
  }

  handlerInputForm = (event) => {
    this.checkInputValidity(event.target)
    this.setSubmitButtonState(this._form.checkValidity())
  }

  setEventListeners = () => {
    this._form.addEventListener('input', this.handlerInputForm)
  }

  resetFormAlerts = () => {
    if (this.alert.textContent != '') {
      this.alert.textContent = ''
    }
  }

  resetForms = () => {
    this._form.reset()
  }
}