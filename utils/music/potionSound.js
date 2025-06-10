const potionSound = document.querySelector(".potion-Sound");

export function audioPotionSound() {
  potionSound.currentTime = 0;
  return  potionSound.play();
}