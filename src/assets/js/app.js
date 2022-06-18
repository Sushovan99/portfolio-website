import gsap from "gsap";

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
    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });
    gsap.to(".loading__text, .loading__counter", {
      duration: 1,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "40rem",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      duration: 10,
      rotate: "360deg",
      opacity: 1,
    });
    gsap.to(".loading__box", {
      delay: 2,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      background: "transparent",
      opacity: 0.5,
    });
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      rotate: "360deg",
    });
  }
}, 25);
