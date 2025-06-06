import { renderAdditionlvl1, initrenderAdditionlvl1 } from '../levels/addition/additionLvl1.js';
import { renderSubtractionLvl1, initrenderSubtractionLvl1 } from '../levels/subtraction/subtractionLvl1.js';
import { renderCountingLvl1, initrenderCountingLvl1 } from '../levels/counting/countingLvl1.js';
import { ButtonPop } from '../../utils/music/ButtonPop.js'

export function renderStartAdventure() {
  return `
      <div class="start-Adventure-Screen">

        <div class="game-type-Container">

          <button class="game-type-Btn additionGameBtn">
            <img class="blob-bg" src="/assets/images/blob9.png">
            Addition Advenutre
            <span class="text-Bg">Addition Advenutre</span>
          </button>

          <button class="game-type-Btn subtractionGameBtn">
            <img class="blob-bg" src="/assets/images/blob10.png">
            Subtraction Advenutre
            <span class="text-Bg">Subtraction Advenutre</span>
          </button>

          <button class="game-type-Btn countingGameBtn">
            <img class="blob-bg" src="/assets/images/blob11.png">
            Counting Advenutre
            <span class="text-Bg">Counting Advenutre</span>
          </button>

          <button class="game-type-Btn-soon">
            <img class="blob-bg" src="/assets/images/blob12.png">
            Soon Advenutre
            <span class="text-Bg-soon">Soon Advenutre</span>
          </button>

        </div>
        
      </div>
  `;
}

export function initrenderStartAdventure() {
  // Parent Screen
  const mainScreen = document.querySelector(".main-Screen");

  // startAdventureScreen ==> additionGameScreen
  const backBtn = document.querySelector(".additionGameBtn");
  backBtn.addEventListener("click", () => {
    ButtonPop();
    mainScreen.innerHTML = renderAdditionlvl1();
    initrenderAdditionlvl1();  // initialize additionGameScreen event keys
  });

  // startAdventureScreen ==> subtractionGameScreen
  const subtractionGameBtn = document.querySelector(".subtractionGameBtn");
  subtractionGameBtn.addEventListener("click", () => {
    ButtonPop();
    mainScreen.innerHTML = renderSubtractionLvl1();
    initrenderSubtractionLvl1();  // initialize subtractionGameScreen event keys
  });

  // startAdventureScreen ==> countingGameScreen
  const countingGameBtn = document.querySelector(".countingGameBtn");
  countingGameBtn.addEventListener("click", () => {
    ButtonPop();
    mainScreen.innerHTML = renderCountingLvl1();
    initrenderCountingLvl1();  // initialize countingGameScreen event keys
  });

}
