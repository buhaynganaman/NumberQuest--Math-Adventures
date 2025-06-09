const completeSound = document.querySelector(".complete-level-Sound");

export function audioCompleteChallenge() {
  completeSound.currentTime = 0;
  completeSound.volume = 0.5;
  return  completeSound.play();
}