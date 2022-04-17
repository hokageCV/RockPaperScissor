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

let playerScore =0;
let computerScore =0;


const wrapper = document.querySelector("btn-group");
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'button';
  if (!isButton) {
    return;
  }

  console.dir(event.target.id);
})

