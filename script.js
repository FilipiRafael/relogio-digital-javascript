const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

setInterval(() => {

    let date = new Date()
    let dhours = date.getHours
    let dmin = date.getMinutes
    let dsec = date.getSeconds

    hour.innerHTML = `${formatTime(dhours)}`
    min.innerHTML = `${formatTime(dmin)}`
    sec.innerHTML = `${formatTime(dsec)}`

}, 1000)

function formatTime(time) {
    return time < 10 ? '0' + time : time
}