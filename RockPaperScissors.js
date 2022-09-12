import {playRound} from "./playRound.js";
import {updateScoreBoard} from "./updateScoreBoard.js"

function computerPlay() {
    let moves = ['rock', 'paper', 'scissor'];
    return moves[Math.floor( Math.random()*moves.length )];
}
const roundsDiv = document.querySelector(".rounds")

let playerScore =0;
let computerScore =0;
let computerSelection = null;
let playerSelection = null;



const wrapper = document.getElementById("btnGrp");
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  playerSelection = event.target.id;
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection, playerScore, computerScore);
  updateScoreBoard(playerScore, computerScore);
})





