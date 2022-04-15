function computerPlay() {
    let moves = ['rock', 'paper', 'scissor'];
    return moves[Math.floor( Math.random()*moves.length )];
}


// this one is working
// function playRound ( playerSelection, computerSelection ) {
//     if(computerSelection == 'rock'){
//         if(playerSelection == 'paper')
//             return `${playerSelection} vs ${computerSelection} : player jeet gaya ` ;
//         else if( playerSelection == 'rock')
//             return `${playerSelection} vs ${computerSelection} : mukabala barabari ka raha ` ;
//         else
//             return `${playerSelection} vs ${computerSelection} : computer jeet gaya ` ;
//     }
//     else if(computerSelection == 'paper'){
//         if(playerSelection == 'scissor')
//             return `${playerSelection} vs ${computerSelection} : player jeet gaya ` ;
//         else if( playerSelection == 'paper')
//             return `${playerSelection} vs ${computerSelection} : mukabala barabari ka raha ` ;
//         else
//             return `${playerSelection} vs ${computerSelection} : computer jeet gaya ` ;
//     }
//     else if(computerSelection == 'scissor'){
//         if(playerSelection == 'rock')
//             return `${playerSelection} vs ${computerSelection} : player jeet gaya ` ;
//         else if( playerSelection == 'scissor')
//             return `${playerSelection} vs ${computerSelection} : mukabala barabari ka raha ` ;
//         else
//             return `${playerSelection} vs ${computerSelection} : computer jeet gaya ` ;
//     }
// }
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

for( let round =1; round <=5; round++){
    let playerSelection = String( prompt("kya select karte hao? rock paper scissor ") ) ;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

console.log( " " );
console.log( `player's score is ${playerScore} and computer's score is ${computerScore} ` );
let winner = playerScore>computerScore ? "Player" : "computer" ;
console.log( `vijeta hai ${winner} ` );
