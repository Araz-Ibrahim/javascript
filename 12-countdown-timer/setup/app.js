const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 5, 24, 3, 30, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 22, 30, 0); // giveaway after 10 days 
 
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth(); // 0 to 11
month = months[month];

const date = futureDate.getDate(); //day of month

const weelday = weekdays[futureDate.getDay()]; //day of week & 0 to 6

giveaway.textContent = `giveaway ends on ${weelday}, ${date} ${month} ${year} ${hours}:${minutes}am` 

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureDate - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  //value in ms 
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values 
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if(item < 10) {
      return item = `0${item}`
    } else {
      return item;
    }
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  })

  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();