const prompt = require("prompt-sync")();

const choices = ["rock", "paper", "scissors"];
let turns = 0;
let wins = 0;
let losses = 0;
let draws = 0;

while (turns < 5) {
  //computer outputs
  const randomChoice = 0 + Math.round(Math.random() * 2);
  const computerChoice = choices[randomChoice];

  //player inputs
  let input = prompt("Choose between rock, paper or scissors: ");
  //maybe remove blank spaces?
  const playerChoice = input.toLowerCase();

  //checks if playerChoice is valid input
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    turns++;
    //break;
  } else {
    console.log(playerChoice, "is an invalid choice. Please try again\n");
    continue;
  }

  if (playerChoice === computerChoice) {
    draws++;
    console.log("that is a draw. The computer choose", computerChoice, "\n");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    wins++;
    console.log("you win. The computer chose", computerChoice, "\n");
  } else {
    losses++;
    console.log("you lose. The computer chose", computerChoice, "\n");
  }
}

console.log(
  "You have " + wins,
  "wins," + losses,
  "losses, and " + draws,
  "draws.\n"
);
