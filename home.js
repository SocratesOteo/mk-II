
const leaderboardButton = document.querySelector('#leaderboard-button')
const puzzlesButton = document.querySelector('#puzzles-button')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

function clickLeaderBoard(){
    window.location.href = `${baseURL}/leaderboard`
}

function clickPuzzles(){
    window.location.href = `${baseURL}/puzzles`
}



leaderboardButton.addEventListener('click', clickLeaderBoard)
puzzlesButton.addEventListener('click',clickPuzzles)


