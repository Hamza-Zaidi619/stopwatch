var min = 0
var sec = 0
var MiliSecond = 0
var displayMin = document.getElementById("displayMin")
var displaySec = document.getElementById("displaySec")
var displayMiliSecond = document.getElementById("displayMiliSec")

var interval;

function timer(){
    MiliSecond++;
    if(MiliSecond == 10){
        MiliSecond = 0;
        sec++;
    }
        if (sec == 60) {
            sec = 0;
            min++
        }
    
    displayMiliSecond.innerHTML = MiliSecond
    displayMin.innerHTML = min
    displaySec.innerHTML = sec

}

function startTimer(){
    interval = setInterval(function () {
    timer()},100)
}
function pauseTimer (){
    clearInterval(interval)
}
function resetTimer(){
    pauseTimer()
    min = 0
    sec = 0
    MiliSecond = 0
    displayMiliSecond.innerHTML = MiliSecond
    displaySec.innerHTML = sec
    displayMin.innerHTML = min

} 