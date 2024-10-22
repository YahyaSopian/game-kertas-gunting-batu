function playGame() {
  // Inisialisasi variabel skor dalam lingkup playGame
  let humanScore = 0;
  let computerScore = 0;

  // Fungsi untuk memainkan satu ronde
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Hasil seri! Kamu dan komputer memilih " + humanChoice);
    } else if ((humanChoice === "batu" && computerChoice === "gunting") || (humanChoice === "kertas" && computerChoice === "batu") || (humanChoice === "gunting" && computerChoice === "kertas")) {
      humanScore++;
      console.log("Kamu menang! " + humanChoice + " mengalahkan " + computerChoice);
    } else {
      computerScore++;
      console.log("Kamu kalah! " + computerChoice + " mengalahkan " + humanChoice);
    }
  }

  // Mainkan 5 ronde
  for (let i = 0; i < 5; i++) {
    // Simulasikan pilihan manusia dan komputer untuk setiap ronde
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  // Tampilkan skor akhir setelah 5 ronde
  console.log("Skor akhir:");
  console.log("Skor Manusia: " + humanScore);
  console.log("Skor Komputer: " + computerScore);
}

// Fungsi getComputerChoice untuk memilih secara acak
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "batu";
  } else if (randomNumber === 1) {
    return "kertas";
  } else {
    return "gunting";
  }
}

// Fungsi getHumanChoice untuk mendapatkan pilihan dari pengguna
function getHumanChoice() {
  let choice = prompt("Masukkan pilihan Anda: batu, kertas, atau gunting").toLowerCase();
  choice = choice.toLowerCase();

  while (choice !== "batu" && choice !== "kertas" && choice !== "gunting") {
    choice = prompt("Pilihan tidak valid. Silakan masukkan batu, kertas, atau gunting:");
    choice = choice.toLowerCase();
  }

  return choice;
}

// Mulai permainan
playGame();
