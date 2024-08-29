function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getHumanChoice() {
  let choice = prompt("Please enter your choice (Rock, Paper, or Scissor:)");
  choiceFix = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  while (choiceFix !== "Rock" && choiceFix !== "Paper" && choiceFix !== "Scissor") {
    choice = prompt("Choice unvalid. Please try again!");
  }
  return choiceFix;
}
console.log(getHumanChoice());

const humanScore = 0;
const computerScore = 0;
