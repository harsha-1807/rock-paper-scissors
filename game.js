// score cards of player and computer
let playerScoreBox = document.getElementById("player-score");
let compScoreBox = document.getElementById("comp-score");

// scores
let playerScore = 0;
let compScore = 0;

// all buttons
let rockBtn = document.getElementById("rock-button");
let paperBtn = document.getElementById("paper-button");
let scissorsBtn = document.getElementById("scissors-button");

//images of the player's & comp's choice
let playerImg = document.getElementById("player-img");
let compImg = document.getElementById("comp-img");

// winner page
let winnerTxt = document.getElementById("winner-msg");
let winpage = document.querySelector(".winpage");

let choice;

function compChoice() {
  choice = Math.ceil(Math.random() * 3);
  switch (choice) {
    case 1:
      compImg.setAttribute("src", "assets/rock-hand.png");
      break;
    case 2:
      compImg.setAttribute("src", "assets/paper-hand.png");
      break;
    case 3:
      compImg.setAttribute("src", "assets/scissors-hand.png");
      break;
  }
}

rockBtn.onclick = () => {
  compChoice();
  playerImg.setAttribute("src", "assets/rock-hand.png");
  if (choice === 3) {
    playerScore++;
    playerScoreBox.textContent = playerScore;
  } else if (choice === 2) {
    compScore++;
    compScoreBox.textContent = compScore;
  }
  gameOver();
};

paperBtn.onclick = () => {
  compChoice();
  playerImg.setAttribute("src", "assets/paper-hand.png");
  if (choice === 1) {
    playerScore++;
    playerScoreBox.textContent = playerScore;
  } else if (choice === 3) {
    compScore++;
    compScoreBox.textContent = compScore;
  }
  gameOver();
};

scissorsBtn.onclick = () => {
  compChoice();
  playerImg.setAttribute("src", "assets/scissors-hand.png");
  if (choice === 2) {
    playerScore++;
    playerScoreBox.textContent = playerScore;
  } else if (choice === 1) {
    compScore++;
    compScoreBox.textContent = compScore;
  }
  gameOver();
};

function gameOver() {
  if (playerScore === 5 || compScore === 5) {
    rockBtn.style.visibility = "hidden";
    paperBtn.style.visibility = "hidden";
    scissorsBtn.style.visibility = "hidden";
  }
  if (playerScore === 5) {
    winpage.style.visibility = "visible";
  } else if (compScore === 5) {
    winnerTxt.textContent = "Computer won the game";
    winpage.style.visibility = "visible";
  }
}

let playAgain=document.getElementById("playAgainBtn")

playAgain.onclick=()=>{
    window.location.href="./game.html"
}