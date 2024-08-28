function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    console.log("Gunting");
  } else if (randomNumber === 1) {
    console.log("Kertas");
  } else {
    console.log("Batu");
  }
}
