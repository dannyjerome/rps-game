let computerMove;
let score = JSON.parse(localStorage.getItem("rpsScore")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

function saveScore() {
  localStorage.setItem("rpsScore", JSON.stringify(score));
}

function playGame(myMove) {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerMove = choices[randomIndex];

  let result;

  if (computerMove === myMove) {
    result = "It's a Tie";
    score.tie++;
  } else if (
    (myMove === "Rock" && computerMove === "Scissors") ||
    (myMove === "Paper" && computerMove === "Rock") ||
    (myMove === "Scissors" && computerMove === "Paper")
  ) {
    result = "You Won";
    score.win++;
  } else {
    result = "You Lost";
    score.lose++;
  }
  document.getElementById("result").innerHTML = result;
  document.getElementById("moves").innerHTML =
    "Your move: " + myMove + " Computer move: " + computerMove;
  saveScore();
  updateScore();
}

function updateScore() {
  document.getElementById("score").innerHTML =
    "Won: " + score.win + " Lost: " + score.lose + " Ties: " + score.tie;
}

document.getElementById("score").innerHTML =
  "Won: " + score.win + " Lost: " + score.lose + " Ties: " + score.tie;

function resetScore() {
  const confirmation = confirm("Are you sure you want to reset the score?");
  if (confirmation) {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    saveScore();
    updateScore();
  }
}
