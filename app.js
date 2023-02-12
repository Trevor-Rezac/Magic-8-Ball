import { shake8Ball, revealAnswer } from "./utils.js";

const eightBall = document.querySelector(".ball");

eightBall.addEventListener("click", doMagic);

//init a paused variable to delay some animation
let isPaused = false;

function doMagic(e) {
  isPaused = true;
  shake8Ball(e);

  //waits to remove the 8 from the ball until the 'shake' is complete
  if (isPaused) {
    setTimeout(function () {
      revealAnswer(e);
    }, 2000);
  } else {
    revealAnswer(e);
  }

  isPaused = false;
}
