import { renderStartGame, initStartGame } from './startGameScreen.js';

const mainScreen = document.querySelector(".main-Screen");
const startGameBtn = document.querySelector(".js-startGameBtn");

startGameBtn.addEventListener('click', () => {
  renderScreen(renderStartGame, initStartGame);
});

function renderScreen(renderFn, initFn) {
  mainScreen.innerHTML = renderFn(); // Inject the UI
  initFn(); // Attach event listeners after DOM is created
}
