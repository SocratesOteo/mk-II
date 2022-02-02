
const leaderboardButton = document.querySelector('#leaderboard-button')
const puzzlesButton = document.querySelector('#puzzles-button')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

function clickLeaderBoard(){
    window.location.href = `${baseURL}/leaderboard`
}

leaderboardButton.addEventListener('click', clickLeaderBoard)