import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';
import { renderCompleteLvLpanel, initrenderCompleteLvLpanel } from '../../pages/panels/completePanel.js';

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
            <img class="hintPotionIcon" src="assets/images/hintPotionICON.png">
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
  // additionScreen ==> StartGame screen
  const backBtn = document.querySelector(".homeBtn");
  backBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStartGame();
    initStartGame(); // initialize StartGame event keys
  });

  // Game logic
  const choices = document.querySelectorAll(".choices-Btn");
  const answerSpan = document.querySelector(".answer");
  const correctAnswer = "2";

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      if (choice.textContent === correctAnswer) {
        // Show the correct answer in the UI
        answerSpan.textContent = correctAnswer;

        // Disable all choices
        choices.forEach(btn => btn.disabled = true);

        // Show level complete panel
        showLevelCompletePanel("additionlvl1");

      } else {
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