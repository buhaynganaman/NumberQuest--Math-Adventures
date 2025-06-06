import { renderStartGame, initStartGame } from './startGameScreen.js';
import { backgroundMusic } from '../../utils/music/bgMusic.js'
import { ButtonPop } from '../../utils/music/ButtonPop.js'

const mainScreen = document.querySelector(".main-Screen");
const startGameBtn = document.querySelector(".js-startGameBtn");

startGameBtn.addEventListener('click', () => {
  ButtonPop();
  backgroundMusic();
  renderScreen(renderStartGame, initStartGame);
});

function renderScreen(renderFn, initFn) {
  mainScreen.innerHTML = renderFn(); // Inject the UI
  initFn(); // Attach event listeners after DOM is created
}
