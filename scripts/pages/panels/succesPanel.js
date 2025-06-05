import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';
import { renderCountingLvl1, initrenderCountingLvl1 } from '../../levels/counting/countingLvl1.js';

export function renderSuccesPanel(levelId) {
  return `
      <div class="panel-Screen data-level="${levelId}">
        <div class="panelContainer-Complete">
          <div class="CompleteTxt">
            Complete
            <img class="tokenICON" src="assets/images/tokenICON.png">
          </div>
          <div class="CompleteSentence">
            "Impressive! You nailed the right amount!"
          </div>
          <div class="optionsBtnContainer">
            <button class="retryBtn">
              <img class="panelIconBtn" src="assets/images/retryICON.png">
            </button>
            <button class="homeBtn">
              <img class="panelIconBtn" src="assets/images/homeICON.png">
            </button>
            <button class="nextBtn">
              <img class="panelIconBtn" src="assets/images/nextICON.png">
            </button>
          </div>
        </div>  
      </div>
  `;
}

export function initrenderSuccesPanel(levelId) {
  const mainScreen = document.querySelector(".main-Screen");

  // panel ==> StartGame screen
  const backBtn = document.querySelector(".panel-Screen .homeBtn");
  backBtn.addEventListener("click", () => {
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });

  // Retry button
  const retryBtn = document.querySelector(".panel-Screen .retryBtn");
  retryBtn.addEventListener("click", () => {
    // Dynamic level retry based on ID
    if (levelId === "countinglvl1") {
      mainScreen.innerHTML = renderCountingLvl1();
      initrenderCountingLvl1();
    }
  });

}
