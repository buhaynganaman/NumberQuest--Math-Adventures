import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';
import { renderFailPanel, initrenderFailPanel } from '../../pages/panels/failPanel.js';
import { renderFailPanel1, initrenderFailPanel1 } from '../../pages/panels/failPanel1.js';
import { renderSuccesPanel, initrenderSuccesPanel } from '../../pages/panels/succesPanel.js';
import { ButtonPop } from '../../../utils/music/ButtonPop.js';
import { audioCrunchSound } from '../../../utils/music/crunchSound.js';
import { audioPotionSound } from '../../../utils/music/potionSound.js';

export function renderCountingLvl1() {
  return `
      <div class="counting-Screen">

        <div class="counting-header-Container">
          <div class="counting">
            Counting level 1
          </div>

          <button class="home-Btn homeBtn">
            <img class="icons" src="assets/images/homeICON.png">
          </button>
        </div>

        <div class="playground-Container">
          <div class="mission-Container">
            <span class="mission">Mission:</span>
            <p class="mission-p">
              Eat up all this cookies scattered on the table.
              You will only need to eat 5 cookies.
  
              if you think you eat a 5 cookies just simply 
              click DONE 
  
              if you think you did not eat 5 cookies yet just simply click KEEP EATING
            </p>
          </div>

          <div class="mission-playground">
            <div class="hint">"Try counting each cookie you eat—1, 2, 3... That way, you’ll always know how many you’ve had!"</div>
            <p class="eaten">Eaten = <span class="eaten-Counter">0</span></p>
            <img class="hintPotionIcon" src="assets/images/hintPotionICON.png">
            <div class="table">
              <img class="cookies1 cookies" src="assets/images/cookiesICON.png">
              <img class="cookies2 cookies" src="assets/images/cookiesICON.png">
              <img class="cookies3 cookies" src="assets/images/cookiesICON.png">
              <img class="cookies4 cookies" src="assets/images/cookiesICON.png">
              <img class="cookies5 cookies" src="assets/images/cookiesICON.png">
              <img class="cookies6 cookies" src="assets/images/cookiesICON.png">
            </div>
            <div class="missionButtons">
              <button class="keepEatingBtn">Keep Eating</button>
              <button class="DoneEatingBtn">Done Eating</button>
            </div>
          </div>
        </div>

      </div>
  `;
}

export function initrenderCountingLvl1() {
  const mainScreen = document.querySelector(".main-Screen");

  // subtractionGameScreen ==> StartGame screen
  const backBtn = document.querySelector(".homeBtn");
  backBtn.addEventListener("click", () => {
    ButtonPop();
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });

  // Game logic
  const hintPotion = document.querySelector(".hintPotionIcon");
  const hint = document.querySelector(".hint");
  const cookies = document.querySelectorAll(".cookies");
  const eaten = document.querySelector(".eaten-Counter");
  const keepEatingBtn = document.querySelector(".keepEatingBtn")
  const DoneEatingBtn = document.querySelector(".DoneEatingBtn")

  const rightAmount = 5;
  let eatenAmount = 0;

  hintPotion.addEventListener("click", () => {
    audioPotionSound();
    hint.style.display = "block";
  })

  cookies.forEach(cookie => {
    cookie.addEventListener("click", () => {
      audioCrunchSound();
      cookie.style.display = "none";
      eatenAmount++;
      eaten.innerHTML = eatenAmount;
    });
  });

  keepEatingBtn.addEventListener("click", () => {
    ButtonPop();
    if(rightAmount !== eatenAmount) {
      showLevelFailPanel("countinglvl1");
    } else if (rightAmount === eatenAmount) {
      showLevelFailPanel1("countinglvl1");
    }
  })

  DoneEatingBtn.addEventListener("click", () => {
    ButtonPop();
    if(rightAmount !== eatenAmount) {
      showLevelFailPanel("countinglvl1");
    } else {
      showLevelSuccessPanel("countinglvl1");
    }
  })

  function showLevelSuccessPanel(levelId) {
    mainScreen.insertAdjacentHTML('beforeend', renderSuccesPanel(levelId));
    initrenderSuccesPanel(levelId);
  }

  function showLevelFailPanel(levelId) {
    mainScreen.insertAdjacentHTML('beforeend', renderFailPanel(levelId));
    initrenderFailPanel(levelId);
  }

  function showLevelFailPanel1(levelId) {
    mainScreen.insertAdjacentHTML('beforeend', renderFailPanel1(levelId));
    initrenderFailPanel1(levelId);
  }
}
