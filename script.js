const choices = ["rock", "paper", "scissors"];
const btn = document.querySelector("button");
let playerInput = document.querySelector("input");
let computerPick = document.querySelector(".computer > h2");
let popup = document.querySelector(".popup");
let popupMessage = document.querySelector(".popup > p");
let roundsElement = document.querySelector(".rounds");
let playerScoreElement = document.querySelector(".player > p");
let computerScoreElement = document.querySelector(".computer > p");
let computerScore = 0;
let playerScore = 0;
let rounds = 0;

// Helpers
const init = function () {
  roundsElement.textContent = rounds = 0;
  playerScoreElement.textContent = playerScore = 0;
  computerScoreElement.textContent = computerScore = 0;
};
const checkForEndGame = function () {
  if (rounds >= 5) {
    playerScore > computerScore
      ? `${popupHandler(`You win! Your score is ${playerScore}`)}`
      : `${popupHandler(`You lose! Your score is ${playerScore}`)}`;
    init();
  }
};
const updateScore = function () {
  roundsElement.textContent = rounds;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  checkForEndGame();
};
const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * 3)];
};
const getPlayerChoice = function () {
  return playerInput.value.toLowerCase();
};
const popupHandler = function (message) {
  popup.style.visibility = "visible";
  popupMessage.textContent = message;
  setTimeout(() => {
    resetInputs();
    popup.style.visibility = "hidden";
  }, 3000);
};
const resetInputs = function () {
  playerInput.value = computerPick.textContent = "";
};

// Game logic
const oneRound = function (playerChoice, computerChoice) {
  rounds++;
  roundsElement.textContent = rounds;
  computerPick.textContent = computerChoice;
  playerInput.value = playerChoice;

  try {
    if (!choices.includes(playerChoice))
      throw new Error("Please input rock, paper or scissors only!");

    if (playerChoice === computerChoice) {
      popupHandler("It's a draw");
      return;
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore++;
      updateScore();
      popupHandler("You win! Paper beats rock!");
      return;
    }
    if (playerChoice === "rock" && computerChoice === "scissors") {
      playerScore++;
      updateScore();
      popupHandler(`You win! Rock beats scissors!`);
      return;
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore++;
      updateScore();
      popupHandler(`You win! Scissors beats paper!`);
      return;
    }
    computerScore++;
    updateScore();
    popupHandler(
      `You lose! ${
        computerChoice[0].toUpperCase() + computerChoice.slice(1)
      } beats ${playerChoice}!`
    );
    return;
  } catch (error) {
    alert(error);
  }
};
// Button event listener to start the game
document.querySelector("button").addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  oneRound(playerChoice, computerChoice);
});

// Clean UI on reload
init();
