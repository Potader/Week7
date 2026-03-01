window.onload = checkTime;

// Pulling page elements into variables for display functions to manage

const siteGreeting = document.getElementById("greeting");
const routineUl = document.getElementById("ul-routine");
const routineImage = document.getElementById("img-routine");
const routineAudio = document.getElementById("aud-routine");

//**************** FUNCTIONAL FUNCTIONS **********************//

// Main dynamic site function, styles page based on time of day
function checkTime() {
  const current = new Date();
  let hours = current.getHours();
  // console.log(hours); testing that checkTime runs hour check
  if (hours < 11) {
    setMorning();
  } else if (hours < 19) {
    setAfternoon();
  } else {
    setEvening();
  }
}

// Uses Date object to obtain and return time based on local user setting
function displayTime() {
  const current = new Date();
  let now = current.toLocaleTimeString();
  return now;
}

// Creates unordered list row, used in forEach loops to display arrays on webpages as lists
// Shamelessly stolen from my week 3 work, modified for current week
function displayCheckList(item) {
  let newItem = document.createElement("li");
  newItem.textContent = item;
  routineUl.appendChild(newItem);
}

//**************** COSMETIC FUNCTIONS **********************//

function setMorning() {
  // Cosmetic changes to site. Changes site divs to match time theme
  siteGreeting.innerHTML = `Good morning! It is currently ${displayTime()}`;
  routineImage.src = "images/morning.jpg";
  routineAudio.src = "songs/morningSong.mp3";

  // Checklist array, calls displayChecklist to display it on page
  const checkList = [
    "Finally turn off the 5 snoozed alarms",
    "Brush teeth",
    "Make tea",
    "Eat breakfast",
    "Check news",
  ];
  checkList.forEach(displayCheckList);

  /*
    Originally wanted to add gradient for morning as well
    Ran into repeated bug of background colour retaining css background-color property, even when removed entirely?
    Restarts of VS Code and Live Server did not fix this???
    document.body.style.background =
      "linear-gradient(0deg,rgba(52, 143, 0, 1) 0%, rgba(194, 224, 0, 1) 100%)";
  */
}

function setAfternoon() {
  // Cosmetic changes to site. Changes site divs to match time theme
  siteGreeting.innerHTML = `Good afternoon! It is currently ${displayTime()}`;
  routineImage.src = "images/afternoon.jpg";
  routineAudio.src = "songs/afternoonSong.mp3";
  document.body.style.background =
    "linear-gradient(180deg,rgba(98, 171, 56, 1) 0%, rgba(82, 172, 217, 1) 100%)";

  // Checklist array, calls displayChecklist to display it on page
  const checkList = [
    "Start preparing dinner",
    "Feed cats",
    "Find a good show to watch",
    "Catch up with friends",
    "Relax with video games",
  ];
  checkList.forEach(displayCheckList);
}

function setEvening() {
  // Cosmetic changes to site. Changes site divs to match time theme
  siteGreeting.innerHTML = `Good evening! It is currently ${displayTime()}`;
  routineImage.src = "images/evening.jpg";
  routineAudio.src = "songs/eveningSong.mp3";
  document.body.style.background =
    "linear-gradient(180deg,rgba(15, 70, 102, 1) 0%, rgba(53, 10, 105, 1) 100%)";

  // Checklist array, calls displayChecklist to display it on page
  const checkList = [
    "Eat dinner",
    "Take medicine",
    "Brush teeth",
    "Check alarm & work schedule for next day",
    "Put on show to sleep to",
  ];
  checkList.forEach(displayCheckList);
}
