const choices = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * 3)];
};

const playRound = function () {
  const playerInput = prompt("Pick one: rock, paper or scissors");
};

playRound();
