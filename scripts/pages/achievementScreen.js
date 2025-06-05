import { renderStartGame, initStartGame } from './startGameScreen.js';

export function renderAchievement() {
  return `
      <div class="achievement-Screen">

        <div class="header-Container">
          
          <button class="back-Btn">
            <img class="icons" src="assets/images/backICON.png">
          </button>

          <div class="achievement">
            <img class="blob2-img" src="/assets/images/blob2.png">
            Achievements
          </div>

          <!-- Hidden Part -->
          <div class="useless-Container">
            <div>
              <img class="inventory-icons" src="assets/images/hintPotionICON.png">
              1
            </div>
            <div>
              <img class="inventory-icons" src="assets/images/tokenICON.png">
              1
            </div>
          </div>
          <!-- --- --- -->

        </div>

        <div class="achievements-Container">
          <div class="achievement-Container">
            <img class="achievement-bakcground" src="assets/images/blob7.png">
            <img class="achievement-icons" src="assets/images/tokenICON.png">
          </div>
          <div class="achievement-Container">
            <img class="achievement-bakcground" src="assets/images/blob7.png">
            <img class="achievement-icons" src="assets/images/hintPotionICON.png">
          </div>
          <div class="achievement-Container">
            <img class="achievement-bakcground" src="assets/images/blob7.png">
            <img class="achievement-icons" src="assets/images/tropyICON.png">
          </div>
        </div>

        <div class="achievements-Container">
          <span class="label-txt">Token Gatherer</span>
          <span class="label-txt">Potion User</span>
          <span class="label-txt">Math Master</span>
        </div>

      </div>
  `;
}

export function initAchievement() {

  // storeScreen ==> start game screen
  const backBtn = document.querySelector(".back-Btn");
  backBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize store event keys
  });


}
