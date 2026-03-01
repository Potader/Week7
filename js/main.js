window.onload = checkTime;
const routineImage = document.getElementById("img-routine");

function checkTime() {
  const current = new Date();
  let hour = current.getHours();
  if (hour < 11) {
    setMorning();
  } else if (hour < 19) {
    setAfternoon();
  } else {
    setEvening();
  }
}

function setMorning() {
  routineImage.src = "images/morning.jpg";
}
function setAfternoon() {
  routineImage.src = "images/afternoon.jpg";
}
function setEvening() {
  routineImage.src = "images/evening.jpg";
}
