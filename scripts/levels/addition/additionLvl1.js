import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';

export function renderAdditionlvl1() {
  return `
      <div class="Addition-Screen">

        <div class="Addition-header-Container">
          <div class="Addition">
            Addition level 1
          </div>

          <button class="home-Btn homeBtn">
            <img class="icons" src="assets/images/homeICON.png">
          </button>
        </div>

        <div class="playground-Container">
          <div class="playground">
            <span class="instruction">Solve this:</span>
            <div class="question">
              1 + 1 = <span class="answer"> ? </span>
            </div>
            <div class="choices">
              <button class="choices-Btn">11</button>
              <button class="choices-Btn">1</button>
              <button class="choices-Btn">2</button>
            </div>
          </div>
        </div>

      </div>
  `;
}

export function initrenderAdditionlvl1() {

  // additionGameScreen ==> StartGame screen
  const backBtn = document.querySelector(".homeBtn");
  backBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });


}
