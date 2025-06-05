import { renderStore, initStore } from './storeScreen.js';
import { renderAchievement, initAchievement } from './achievementScreen.js';
import { renderStartAdventure, initrenderStartAdventure } from './startAdventureScreen.js';

export function renderStartGame() {
  return `
      <div class="start-Game-Screen">

        <div class="start-Container">
          <img class="blob4" src="assets/images/blob4.png">
          <button class="start-Adventure-Btn startAdventureGameBtn">
            Start Adventure's
            <h2>Start Adventure's</h2>
          </button>
        </div>

        <div class="options-Container">

            <button class="options-Btn storeBtn">
              <img class="icons-bakcground" src="assets/images/blob5.png">
              <img class="icons" src="assets/images/storeICON.png">
            </button>
            <button class="options-Btn achievementBtn">
              <img class="icons-bakcground" src="assets/images/blob6.png">
              <img class="icons" src="assets/images/achievementICON.png">
            </button>
            <button class="options-Btn">
              <img class="icons-bakcground" src="assets/images/blob7.png">
              <img class="icons" src="assets/images/settingsICON.png">
            </button>
            <button class="options-Btn">
              <img class="icons-bakcground" src="assets/images/blob8.png">
              <img class="icons" src="assets/images/HTPICON.png">
            </button>

        </div>

      </div>
  `;
}

export function initStartGame() {

  // render store screen
  const storeBtn = document.querySelector(".storeBtn");
  storeBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStore();
    initStore(); // initialize store event keys
  });

    // render achievement screen
    const achievementBtn = document.querySelector(".achievementBtn");
    achievementBtn.addEventListener("click", () => {
      const mainScreen = document.querySelector(".main-Screen");
      mainScreen.innerHTML = renderAchievement();
      initAchievement(); // initialize achievement event keys
    });

    // render start Adventure screen
    const startAdventureGameBtn = document.querySelector(".startAdventureGameBtn");
    startAdventureGameBtn.addEventListener("click", () => {
      const mainScreen = document.querySelector(".main-Screen");
      mainScreen.innerHTML = renderStartAdventure();
      initrenderStartAdventure(); // initialize start Adventure event keys
    });

}
