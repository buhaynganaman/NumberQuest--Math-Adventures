const crunchSound = document.querySelector(".crunch-Sound");

export function audioCrunchSound() {
  crunchSound.currentTime = 0;
  crunchSound.volume = 0.5;
  return  crunchSound.play();
}