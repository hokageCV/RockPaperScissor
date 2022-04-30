function computerPlay() {
    let moves = ['rock', 'paper', 'scissor'];
    return moves[Math.floor( Math.random()*moves.length )];
}

function playRound ( playerSelection, computerSelection ) {
    if(computerSelection == 'rock'){
        if(playerSelection == 'paper'){
            console.log( `${playerSelection} vs ${computerSelection} : player jeet gaya ` );
            playerScore++;
        }
        else if( playerSelection == 'rock')
            console.log( `${playerSelection} vs ${computerSelection} : mukabala barabari ka raha ` );
        else{
            console.log( `${playerSelection} vs ${computerSelection} : computer jeet gaya ` );
            computerScore++;
        }
    }
    else if(computerSelection == 'paper'){
        if(playerSelection == 'scissor'){
            console.log( `${playerSelection} vs ${computerSelection} : player jeet gaya ` );
            playerScore++;
        }
        else if( playerSelection == 'paper')
            console.log( `${playerSelection} vs ${computerSelection} : mukabala barabari ka raha ` );
        else{
            console.log( `${playerSelection} vs ${computerSelection} : computer jeet gaya ` );
            computerScore++;
        }
    }
    else if(computerSelection == 'scissor'){
        if(playerSelection == 'rock'){
            console.log( `${playerSelection} vs ${computerSelection} : player jeet gaya ` );
            playerScore++;
        }
        else if( playerSelection == 'scissor')
            console.log( `${playerSelection} vs ${computerSelection} : mukabala barabari ka raha ` );
        else{
            console.log( `${playerSelection} vs ${computerSelection} : computer jeet gaya ` );
            computerScore++;
        }
    }
}

function updateScoreOnScreen (  ) {
    let compPoints = document.getElementById("compPoints");
    compPoints.textContent = `${computerScore}` ;

    let playerPoints = document.getElementById("playerPoints");
    playerPoints.textContent = `${playerScore}`
}


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
  playRound(playerSelection, computerSelection);
  updateScoreOnScreen();
})





