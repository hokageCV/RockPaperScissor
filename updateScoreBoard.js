function updateScoreBoard (playerScore, computerScore) {
    let compPoints = document.getElementById("compPoints");
    compPoints.textContent = `${computerScore}` ;

    let playerPoints = document.getElementById("playerPoints");
    playerPoints.textContent = `${playerScore}`
}

export {updateScoreBoard};