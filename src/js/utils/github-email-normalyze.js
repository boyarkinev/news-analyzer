'use strict'

export default function githubEmailNormalyze (data) {
  const email = data.replace(/[\d{8}\+]/g, '')
  return email
}

// console.log(commitCardEmailNormalyze())