import { answersArray } from "./answers.js";

export function shake8Ball(e) {
  const ball = e.target;
  ball.style.animation = "shakeBall 1s alternate ease-in-out 2";
}

export function revealAnswer(e) {
  //hides the 8ball
  const ball = e.target;
  const number8 = ball.childNodes[3];
  number8.style.opacity = "0";

  const answerTriangle = ball.childNodes[5];

  //sets a random answer
  const answerText = document.querySelector(".answer");

  answerText.innerHTML = randomAnswer();

  //displays the answer triangle
  answerTriangle.style.animation = "revealAnswer 3.5s ease-in";
  answerTriangle.style.animationFillMode = "forwards";
}

//generates a random answer using the randomItem generator
function randomAnswer() {
  const randomAnswer = getRandomItem(answersArray);
  return randomAnswer;
}
//generates a random item from an array
function getRandomItem(arr) {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

//NEED TO RESET THE BALL AFTER THE ANSWER HAS BEEN REVEALED
export function resetBall() {
  const number = document.querySelector(".eight");
  number.style.opacity = "1";

  const answer = document.querySelector(".triangle");
  answer.style.opacity = "0";
  answer.style.animation = "none";
  answer.style.animation = null;

  const ball = document.querySelector(".ball");
  ball.style.animation = "none";
  ball.style.animation = null;
}
