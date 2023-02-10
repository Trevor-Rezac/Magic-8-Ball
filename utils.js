export function shake8Ball(e) {
  const ball = e.target;
  ball.style.animation = "shakeBall 1s alternate ease-in-out 2";
}

export function revealAnswer(e) {
  const ball = e.target;
  const number8 = ball.childNodes[3];
  ball.removeChild(number8);
}
