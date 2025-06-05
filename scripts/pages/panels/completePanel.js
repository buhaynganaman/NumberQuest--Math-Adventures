import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';

export function renderCompleteLvLpanel() {
  return `
      <div class="panel-Screen">
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

export function initrenderCompleteLvLpanel() {

  // panel ==> StartGame screen
  const backBtn = document.querySelector(".panel-Screen .homeBtn");
  backBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });

}
