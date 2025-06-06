const buttonPop = document.querySelector(".button-pop");

export function ButtonPop() {
  buttonPop.currentTime = 0;
  buttonPop.volume = 0.5;
  return  buttonPop.play();
}