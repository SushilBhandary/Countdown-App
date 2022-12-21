
let sec = 0
let min = 0
let hour = 0
let clearmil = false
let number = document.querySelector('.number')
let buttons = document.querySelector('.buttons')


const start = () => {
    let value = document.querySelector('#value') ? document.querySelector('#value').value : (hour*3600) + (min*60) +sec
    hour = Math.floor( value / 3600)
    value = value % 3600
    min = Math.floor( value / 60)
    sec = value % 60
    buttons.innerHTML = 
    `<button class="butt" id="stop" onclick="stop()">Stop</button>
    <button class="butt" id="reset" onclick="reset()">Reset</button>
    `
    number.innerHTML = `<h1> ${hour}H ${min}M ${sec}S</h1>`
    let time = setInterval( () => {
        if (clearmil || ( sec === 0 && min === 0 && hour === 0)) {
            clearInterval(time)
            clearmil = false
        } else {
            sec--
            if (sec === 0 ) {
                if (min === 0 && hour === 0) {
                    clearInterval(time)
                } else if (min === 0 && hour > 0) {
                    hour--
                    min = 59
                    sec = 59
                } else if (min > 0) {
                    min--
                    sec = 59
                } 
            }
            number.innerHTML = `<h1> ${hour}H ${min}M ${sec}S</h1>`
        }
        
    }, 1000)
}

const reset = () => {
    hour = 0
    min = 0
    sec = 0
    number.innerHTML = '<input type="text" id="value" placeholder="Enter the Value in sec">'
    buttons.innerHTML = 
    `<button class="butt" id="start" onclick="start()">Start</button>
    <button class="butt" id="reset" onclick="reset()">Reset</button>
    `
}

const stop = () => {
    clearmil = true
    buttons.innerHTML = 
    `<button class="butt" id="start" onclick="start()">Start</button>
    <button class="butt" id="reset" onclick="reset()">Reset</button>
    `
}
