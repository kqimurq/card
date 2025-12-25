const text = `Thank you for making the end of this year feel so special.
I really hope we can keep walking forward together.

Please don’t give up, and don’t feel sad or alone.
If you ever want to talk, I’m always here for you.
And if you ever want to go somewhere or do something together,
I’ll always try my best.

This Christmas Eve feels like one of the best nights I’ve had,
and I’m truly grateful you were part of it.

Thank you for bringing color and warmth into my Christmas night this year, Shishi.

Sincerely,
Kqimurq`;

let index = 0;
const speed = 20;
const messageElement = document.getElementById("message");

function typeEffect() {
  if (index < text.length) {
    messageElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;

function launchConfetti() {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });
}