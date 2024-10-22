function getComputerChoice() {
  // Generate a random number between 0 and 2 (inclusive)
  const randomNumber = Math.floor(Math.random() * 3);

  // Use the random number to return a choice
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: rock, paper, or scissors");

  // Validate the input and re-prompt if invalid
  while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors") {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
  }

  // Return the choice in lowercase for consistency
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner
    if (humanChoice === computerChoice) {
      console.log("It's a tie! You both chose " + humanChoice);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
  }

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Display final scores after 5 rounds
  console.log("Final Scores:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);
}

// ... (getComputerChoice and getHumanChoice functions remain outside)

// Start the game
playGame();
