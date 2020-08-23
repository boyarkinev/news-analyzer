'use strict'

export default function githubEmailNormalyze (data) {
  const email = data.replace(/[\d{8}\+]/g, '')
  return email
}

/* Убираем лишние символы штатного email адреса github
для отображения в карточках коммитов */