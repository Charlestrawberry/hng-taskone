let currentDay = document.getElementById("currentDay");
let currentTime = document.getElementById("currentTime");

let generalTime = new Date();
let mainDay = generalTime.getDay();

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDay.innerText = dayList[mainDay];

let mainMonth = generalTime.getMonth();

let ndate = generalTime.toLocaleString();

currentTime.innerHTML = ndate;
// currentDay.innerHTML = mainDay;
