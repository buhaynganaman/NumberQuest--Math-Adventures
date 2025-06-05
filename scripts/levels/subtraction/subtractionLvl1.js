import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';

export function renderSubtractionLvl1() {
  return `
      <div class="Subtraction-Screen">

        <div class="Subtraction-header-Container">
          <div class="Subtraction">
            Subtraction level 1
          </div>

          <button class="home-Btn homeBtn">
            <img class="icons" src="assets/images/homeICON.png">
          </button>
        </div>

        <div class="playground-Container">
          <div class="playground">
            <span class="instruction">Solve this:</span>
            <div class="question">
              5 - 10 = <span class="answer"> ? </span>
            </div>
            <div class="choices">
              <button class="choices-Btn">55</button>
              <button class="choices-Btn">5</button>
              <button class="choices-Btn">10</button>
            </div>
          </div>
        </div>

      </div>
  `;
}

export function initrenderSubtractionLvl1() {

  // subtractionGameScreen ==> StartGame screen
  const backBtn = document.querySelector(".homeBtn");
  backBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });


}
