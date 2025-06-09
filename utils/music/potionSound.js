const potionSound = document.querySelector(".complete-level-Sound");

export function audioPotionSound() {
  potionSound.currentTime = 0;
  return  potionSound.play();
}