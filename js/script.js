const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  if(toggleBtn.textContent === "Dark mode") {
    toggleBtn.textContent = "Light mode";
  } 
  else {
    toggleBtn.textContent = "Dark mode";
  }
});

function setDateTime() {
  const now = new Date();
  const hour = now.getHours();
  const hoursFormatted = hour % 12 ;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const options1 = {
    hour: "numeric",
    minute: "numeric"
  };
  const options2 = {
    day: "numeric",
    month: "long",
    weekday: "long",
  };

  const curTime = new Intl.DateTimeFormat("en-US", options1).format(now);
  const curDate = new Intl.DateTimeFormat("en-US", options2).format(now);
  timeEl.textContent = curTime;
  dateEl.textContent = curDate;

  hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hoursFormatted, 0, 11, 0, 360)}deg)`;
  minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
  secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
}

function scale(num, inMin, inMax, outMin, outMax) {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setDateTime();
setInterval(setDateTime, 1000);