import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';

export function renderFailPanel1() {
  return `
      <div class="panel-Screen">
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

export function initrenderFailPanel1() {

  // panel ==> StartGame screen
  const backBtn = document.querySelector(".panel-Screen .homeBtn");
  backBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });

}
