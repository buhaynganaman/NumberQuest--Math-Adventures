import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';
import { renderCountingLvl1, initrenderCountingLvl1 } from '../../levels/counting/countingLvl1.js';
import { ButtonPop } from '../../../utils/music/ButtonPop.js'

export function renderFailPanel1(levelId) {
  return `
      <div class="panel-Screen data-level="${levelId}">
        <div class="panelContainer-Failed">
          <div class="FailedTxt">Failed</div>
          <div class="FailedSentence">
            "You’re eating the right amount, but you’re not keeping track of it."
          </div>
          <div class="optionsBtnContainer">
            <button class="retryBtn">
              <img class="panelIconBtn" src="assets/images/retryICON.png">
            </button>
            <button class="homeBtn">
              <img class="panelIconBtn" src="assets/images/homeICON.png">
            </button>
          </div>
        </div>  
      </div>
  `;
}

export function initrenderFailPanel1(levelId) {
  const mainScreen = document.querySelector(".main-Screen");

  // panel ==> StartGame screen
  const backBtn = document.querySelector(".panel-Screen .homeBtn");
  backBtn.addEventListener("click", () => {
    ButtonPop();
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });

  // Retry button
  const retryBtn = document.querySelector(".panel-Screen .retryBtn");
  retryBtn.addEventListener("click", () => {
    ButtonPop();
    // Dynamic level retry based on ID
    if (levelId === "countinglvl1") {
      mainScreen.innerHTML = renderCountingLvl1();
      initrenderCountingLvl1();
    }
  });

}
