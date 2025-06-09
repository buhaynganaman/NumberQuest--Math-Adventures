const failSound = document.querySelector(".fail-level-Sound");

export function audioFailChallenge() {
  failSound.currentTime = 0;
  failSound.volume = 0.5;
  return  failSound.play();
}