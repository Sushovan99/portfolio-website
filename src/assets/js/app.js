const loadingBar = document.querySelector(".loading__bar--inner");
const loadingBarStatus = document.querySelector(
  ".loading__counter--changing-number"
);

let progress = 0;

const setWidth = setInterval(() => {
  loadingBar.style.width = `${progress}%`;
  loadingBarStatus.textContent = `${progress}%`;
  progress++;
  if (progress > 100) {
    clearInterval(setWidth);
  }
}, 25);
