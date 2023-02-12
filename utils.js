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
  console.log("answerText", answerText);
  answerText.innerHTML = randomAnswer();

  //displays the answer triangle
  answerTriangle.style.animation = "revealAnswer 3.5s ease-in";
  answerTriangle.style.animationFillMode = "forwards";
  console.log("answerTriangle", answerTriangle);
}

function randomAnswer() {
  const randomAnswer = getRandomItem(answersArray);
  return randomAnswer;
}

function getRandomItem(arr) {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}
//NEED TO RESET THE BALL AFTER THE ANSWER HAS BEEN REVEALED
// export function resetBall(ball) {
//   console.log("ball", ball);
//   const number = ball.childNodes[3];
//   number.style.opacity = "1";
//   number.style.animation = none;

//   const answer = ball.childNodes[5];
//   answer.style.opacity = "0";
//   answer.style.animation = "";
// }
