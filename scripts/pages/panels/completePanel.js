import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';
import { renderAdditionlvl1, initrenderAdditionlvl1 } from '../../levels/addition/additionLvl1.js';
import { renderSubtractionLvl1, initrenderSubtractionLvl1 } from '../../levels/subtraction/subtractionLvl1.js';

export function renderCompleteLvLpanel(levelId) {
  return `
      <div class="panel-Screen" data-level="${levelId}">
        <div class="panelContainer-Complete">
          <div class="CompleteTxt">
            Complete
            <img class="tokenICON" src="assets/images/tokenICON.png">
          </div>
          <div class="CompleteSentence">
            You did a good job!
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

export function initrenderCompleteLvLpanel(levelId) {
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
    if (levelId === "additionlvl1") {
      mainScreen.innerHTML = renderAdditionlvl1();
      initrenderAdditionlvl1();
    } else if(levelId === "subtractionlvl1") {
      mainScreen.innerHTML = renderSubtractionLvl1();
      initrenderSubtractionLvl1();
    }

  });

}
