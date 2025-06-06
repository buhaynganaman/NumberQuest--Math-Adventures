import { renderStartGame, initStartGame } from './startGameScreen.js';
import { ButtonPop } from '../../utils/music/ButtonPop.js'

export function renderStore() {
  return `
      <div class="store-Screen">

        <div class="header-Container">
          
          <button class="back-Btn">
            <img class="icons" src="assets/images/backICON.png">
          </button>

          <div class="store">
            <img class="blob2-img" src="/assets/images/blob2.png">
            Store
          </div>

          <div class="inventory-Container">
            <div>
              <img class="inventory-icons" src="assets/images/hintPotionICON.png">
              1
            </div>
            <div>
              <img class="inventory-icons" src="assets/images/tokenICON.png">
              1
            </div>
          </div>

        </div>

        <div class="potion-Container">
          <img class="potion-bakcground" src="assets/images/blob7.png">
          <img class="potion-icons" src="assets/images/hintPotionICON.png">
        </div>

        <div class="label-Container">
          Hint Potion
        </div>

      </div>
  `;
}

export function initStore() {
  // Parent Screen
  const mainScreen = document.querySelector(".main-Screen");
  
  // storeScreen ==> start game screen
  const backBtn = document.querySelector(".back-Btn");
  backBtn.addEventListener("click", () => {
    ButtonPop();
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });


}
