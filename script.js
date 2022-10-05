const choices = ["rock", "paper", "scissors"];
const btn = document.querySelector("button");
let playerInput = document.querySelector("input");
let computerPick = document.querySelector(".computer > h2");
let popup = document.querySelector(".popup");
let popupMessage = document.querySelector(".popup > p");
let computerScore = 0;
let playerScore = 0;
let rounds = 0;

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
  }, 2000);
};

const resetInputs = function () {
  playerInput.value = computerPick.textContent = "";
};

const oneRound = function (playerChoice, computerChoice) {
  rounds++;

  try {
    if (choices.every((choice) => choice !== playerChoice))
      throw new Error("Please input rock, paper or scissors only!");

    if (playerChoice === computerChoice) {
      popupHandler("It's a draw");
    }
    if (playerChoice === "paper" && computerChoice !== "scissors") {
      playerScore++;
      popupHandler("You win! Paper beats rock!");
    }
    if (playerChoice === "rock" && computerChoice !== "paper") {
      playerScore++;
      popupHandler(`You win! Rock beats scissors!`);
    }
    if (playerChoice === "scissors" && computerChoice !== "rock") {
      playerScore++;
      popupHandler(`You win! Scissors beats paper!`);
    }
    computerScore++;
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

const play = function () {};
document.querySelector("button").addEventListener("click", function () {
  const computerChoice = (computerPick.textContent = getComputerChoice());
  const playerChoice = (playerInput.value = getPlayerChoice());
  oneRound(playerChoice, computerChoice);
});
