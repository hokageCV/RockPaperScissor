function updateScoreBoard () {
    let compPoints = document.getElementById("compPoints");
    compPoints.textContent = `${computerScore}` ;

    let playerPoints = document.getElementById("playerPoints");
    playerPoints.textContent = `${playerScore}`
}
