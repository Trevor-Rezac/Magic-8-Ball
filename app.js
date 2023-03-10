import { shake8Ball, revealAnswer, resetBall } from "./utils.js";

const eightBall = document.querySelector(".ball");

eightBall.addEventListener("click", doMagic);

//init a paused variable to delay some animation
let isPaused = false;

function doMagic(e) {
  e.preventDefault();

  isPaused = true;
  shake8Ball(e);

  //waits to remove the 8 from the ball and reveal the answer until the 'shake' is complete
  if (isPaused) {
    setTimeout(function () {
      revealAnswer(e);
    }, 2000);
  } else {
    revealAnswer(e);
  }

  isPaused = false;

  //reset the ball after animations are done
  setTimeout(function () {
    resetBall();
  }, 8000);
}
