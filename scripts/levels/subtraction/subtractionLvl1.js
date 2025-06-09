import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';
import { renderCompleteLvLpanel, initrenderCompleteLvLpanel } from '../../pages/panels/completePanel.js';
import { ButtonPop } from '../../../utils/music/ButtonPop.js';
import { audioCompleteChallenge } from '../../../utils/music/completePanelSound.js';

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
            <img class="hintPotionIcon" src="assets/images/hintPotionICON.png">
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
  // Parent Screen
  const mainScreen = document.querySelector(".main-Screen");

  // subtractionGameScreen ==> StartGame screen
  const backBtn = document.querySelector(".homeBtn");
  backBtn.addEventListener("click", () => {
    ButtonPop();
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });

  // Game logic
  const choices = document.querySelectorAll(".choices-Btn");
  const answerSpan = document.querySelector(".answer");
  const correctAnswer = "5";

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      if (choice.textContent === correctAnswer) {
        ButtonPop();

        // Show the correct answer in the UI
        answerSpan.textContent = correctAnswer;

        // Disable all choices
        choices.forEach(btn => btn.disabled = true);

        // Show level complete panel
        showLevelCompletePanel("subtractionlvl1");

      } else {
        ButtonPop();
        // Hide the wrong answer
        choice.style.display = "none";
      }
    });
  });
}

// Function to show the level complete panel
function showLevelCompletePanel(levelId) {
  const mainScreen = document.querySelector(".main-Screen");

  // insert the panel to screen
  mainScreen.insertAdjacentHTML('beforeend', renderCompleteLvLpanel(levelId));
  initrenderCompleteLvLpanel(levelId);
}
