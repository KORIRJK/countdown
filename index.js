const countdownDisplay = document.getElementById("countdown-display")
const hourscountdownDisplay = document.getElementById("hourscountdown-display")
const minutescountdownDisplay = document.getElementById("minutescountdown-display")
const secondscountdownDisplay = document.getElementById("secondscountdown-display")
function renderCountdown(){
    const christmas = 25
    //  Get today's date (only the day).
    const countdown = new Date();
const date1 = countdown.getDate();

console.log(date1);// displays current date in console
    //  Calculate remaining days.
    let remaining=christmas-date1
    console.log(remaining)
    //  Display remaining days in countdownDisplay.
    countdownDisplay.textContent=remaining
}
 
renderCountdown()


//  Display hours, minutes, seconds.
function hmsCountdown(){
const christ25 = new Date('Dec 25, 2025 00:00');
const today = new Date();
let deficit=christ25-today
let hours= Math.floor(deficit/(1000*60*60))
let minutes=Math.floor(deficit/(1000*60))
let seconds=Math.floor(deficit/1000)
hourscountdownDisplay.textContent=hours
minutescountdownDisplay.textContent=minutes
secondscountdownDisplay.textContent=seconds
console.log(hours);
console.log(minutes)
console.log(seconds)
}
hmsCountdown()
// - Add a countdown for another festival, your birthday, or Christmas 2030.
