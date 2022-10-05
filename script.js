const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let rounds = 0;

const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * 3)];
};

const getPlayerChoice = function () {
  //return prompt("Pick one: rock, paper or scissors").toLowerCase();
};

const oneRound = function () {
  const computer = getComputerChoice();
  const player = getPlayerChoice();
  rounds++;

  try {
    if (choices.every((choice) => choice !== player))
      if (player === computer)
        //throw new Error("Please input rock, paper or scissors only!");
        return `It's a draw`;
    if (player === "paper" && computer !== "scissors") {
      playerScore++;
      return `You win! Paper beats rock!`;
    }
    if (player === "rock" && computer !== "paper") {
      playerScore++;
      return `You win! Rock beats scissors!`;
    }
    if (player === "scissors" && computer !== "rock") {
      playerScore++;
      return `You win! Scissors beats paper!`;
    }
    computerScore++;

    return `You lose! ${
      computer[0].toUpperCase() + computer.slice(1)
    } beats ${player}!`;
  } catch (error) {
    alert(error);
  }
};

const play = function () {
  for (let i = 0; i < 5; i++) {
    rounds++;
    console.log(oneRound());
  }
  console.log(`Final score: Computer ${computerScore}, Player ${playerScore}`);
};

play();
