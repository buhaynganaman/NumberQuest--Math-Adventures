const bgMusic = document.querySelector(".bg-music");

export function backgroundMusic() {
  bgMusic.volume = 0.5;
  return  bgMusic.play();
}