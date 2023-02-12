export function shake8Ball(e) {
  const ball = e.target;
  ball.style.animation = "shakeBall 1s alternate ease-in-out 2";
}

export function revealAnswer(e) {
  //hides the 8ball
  const ball = e.target;
  const number8 = ball.childNodes[3];
  number8.style.opacity = "0";

  //displays the answer triangle
  const answerTriangle = ball.childNodes[5];
  answerTriangle.style.animation = "revealAnswer 3.5s ease-in";
  answerTriangle.style.animationFillMode = "forwards";
}
