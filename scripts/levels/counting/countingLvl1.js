import { renderStartGame, initStartGame } from '../../pages/startGameScreen.js';
import { renderFailPanel, initrenderFailPanel } from '../../pages/panels/failPanel.js';
import { renderFailPanel1, initrenderFailPanel1 } from '../../pages/panels/failPanel1.js';
import { renderSuccesPanel, initrenderSuccesPanel } from '../../pages/panels/succesPanel.js';

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
            <p class="eaten">Eaten = <span class="eaten-Counter">0</span></p>
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

  // subtractionGameScreen ==> StartGame screen
  const backBtn = document.querySelector(".homeBtn");
  backBtn.addEventListener("click", () => {
    const mainScreen = document.querySelector(".main-Screen");
    mainScreen.innerHTML = renderStartGame();
    initStartGame();  // initialize StartGame event keys
  });

  // Game logic
  const cookies = document.querySelectorAll(".cookies");
  const eaten = document.querySelector(".eaten-Counter");
  const keepEatingBtn = document.querySelector(".keepEatingBtn")
  const DoneEatingBtn = document.querySelector(".DoneEatingBtn")

  const rightAmount = 5;
  let eatenAmount = 0;

  cookies.forEach(cookie => {
    cookie.addEventListener("click", () => {
      cookie.style.display = "none";
      eatenAmount++;
      eaten.innerHTML = eatenAmount;
    });
  });

  keepEatingBtn.addEventListener("click", () => {
    if(rightAmount !== eatenAmount) {
      const mainScreen = document.querySelector(".main-Screen");
      mainScreen.insertAdjacentHTML('beforeend', renderFailPanel());
      initrenderFailPanel();
    } else if (rightAmount === eatenAmount) {
      const mainScreen = document.querySelector(".main-Screen");
      mainScreen.insertAdjacentHTML('beforeend', renderFailPanel1());
      initrenderFailPanel1();
    }
  })

  DoneEatingBtn.addEventListener("click", () => {
    if(rightAmount !== eatenAmount) {
      const mainScreen = document.querySelector(".main-Screen");
      mainScreen.insertAdjacentHTML('beforeend', renderFailPanel());
      initrenderFailPanel();
    } else {
      const mainScreen = document.querySelector(".main-Screen");
      mainScreen.insertAdjacentHTML('beforeend', renderSuccesPanel());
      initrenderSuccesPanel();
    }
  })

}
