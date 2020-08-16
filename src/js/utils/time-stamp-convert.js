'use strict'

import monthsList from '../constants/months-list';

export default function timeStampConvert (data) {
  const date = data.substr(0, 10)
  const year = date.substr(0, 4)
  const month = date.substr(5, 2)
  const day = date.substr(8)
  const timeStamp = day + " " + monthsList[month] + ", " + year
  return timeStamp
}