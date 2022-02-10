
const backButton = document.querySelector('#back-button')
const playButton = document.getElementById('play-game-button')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

function backLink(){
    window.location.href = `${baseURL}/home ` || `http://localhost:5777/home`
}

var puzzleData = []
/*
function getPuzzle(){
    axios.get('http://localhost:5777/get-puzzles'|| `${baseURL}/get-puzzles`).
    then((res)=>{
        console.log(res)
         let data = res.data[0]
        let dataObj = {
            id: data[0].puzzle_id,
            question: data[0].question,
            answer: data[0].answer,
            sixHours: data[0].six_hours_value,
            tweveHours: data[0].twelve_hours_value,
            twentyFourHours: data[0].twenty_four_hours_value
        }
    })
}

window.addEventListener('DOMContentLoaded',getPuzzle)


console.log(puzzleData)
console.log(puzzleData[0])
*/

function puzzleClick(){
    window.location.href=  `http://localhost:5777/puzzle-on` || `${baseURL}/puzzle-on`

}


backButton.addEventListener('click',backLink )
playButton.addEventListener('click',puzzleClick)

