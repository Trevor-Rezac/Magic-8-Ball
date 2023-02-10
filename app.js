import { shake8Ball, revealAnswer } from "./utils.js";

const eightBall = document.querySelector(".ball");

eightBall.addEventListener("click", doMagic);

let isPaused = false;

function doMagic(e) {
  isPaused = true;
  shake8Ball(e);

  if (isPaused) {
    setTimeout(function () {
      revealAnswer(e);
    }, 2000);
  } else {
    revealAnswer(e);
  }

  isPaused = false;
}
