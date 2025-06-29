let seconds = 0;
let timerId = null;

document.getElementById("start").addEventListener("click",() => {
if(timerId != null) return

timerId = setInterval(() => {
    seconds++
    document.getElementById("value").textContent = seconds;
}, 50);
})
document.getElementById("stop").addEventListener("click",() => {
clearInterval(timerId)
timerId = null
})
document.getElementById("clear").addEventListener("click",() => {
clearInterval(timerId)
timerId = null
seconds = 0;
document.getElementById("value").textContent = seconds;
})