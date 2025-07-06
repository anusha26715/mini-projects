const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const timerListEl = document.getElementById("timerList")

const timerCount = 59
let hours = 0;
let minutes = 0;
let seconds = 0;
let secondsInterval = null;
let isRunning = false;

function startTimer(){
    if(isRunning) return;
    isRunning = true
    secondsInterval = setInterval(()=>{
        seconds++
        if(seconds>timerCount) {
            seconds = 0
            minutes++ 
        };
        secondsEl.innerText = seconds<10? `0${seconds}`:seconds
        
        if(minutes>timerCount) {
            minutes = 0
            hours++
        };
        minutesEl.innerText = minutes<10? `0${minutes}`:minutes
        if(hours>23){
            seconds = 0
            minutes = 0
            hours = 0
        }
        hoursEl.innerText = hours<10? `0${hours}`:hours
        
    },1000)
    
}

function stopTimer(){
    clearInterval(secondsInterval)
    secondsInterval = null;
    isRunning = false;
    const eachTimerEl = document.createElement('li')
    eachTimerEl.innerText = `${hours} Hr : ${minutes} Min : ${seconds} Sec`
    timerListEl.appendChild(eachTimerEl)
}


function restartTimer(){
    seconds = 0
    minutes = 0
    hours = 0
    secondsEl.innerText = '00'
    minutesEl.innerText = '00'
    hoursEl.innerText = '00'
    timerListEl.innerHTML = ''
    startTimer()
}