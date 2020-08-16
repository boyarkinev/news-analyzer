'use strict'

function newsTextCorrection (text) {
  if (text === null) {
    return 'Описание отсутствует'
  }
  return text.replace(/<[\/]?\w+>/g, '')
}

export default newsTextCorrection