let monthContainer = document.querySelector('.month')
let dayContainer = document.querySelector('.day')
let dateContainer = document.querySelector('.date')
let yearContainer = document.querySelector('.year')

let monthName = ['January', 'February', 'March', 'April', 'may', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday']

let date = new Date()

monthContainer.innerHTML = monthName[date.getMonth()]
dayContainer.innerHTML = dayName[date.getDay()]
dateContainer.innerHTML = date.getDate()
yearContainer.innerHTML = date.getFullYear()

let month = date.getMonth()
let day = date.getDay()
let todaysDate = date.getDate()
let year = date.getFullYear()