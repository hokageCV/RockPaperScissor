function playRound ( playerSelection, computerSelection, playerScore, computerScore ) {

    if(computerSelection == 'rock'){
        if(playerSelection == 'paper'){
            console.log( `${playerSelection} vs ${computerSelection} : player jeet gaya ` );
            playerScore++;
            
        }
        else if( playerSelection == 'rock'){
            console.log( `${playerSelection} vs ${computerSelection} : mukabala barabari ka raha ` );
        }
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

export {playRound};