

const questionBox = document.querySelector('#question-box')
const answerBox = document.querySelector('#answer-box')
const sixHoursButton = document.getElementById('6-hours-button')
const twelveHoursButton = document.getElementById('12-hours-button')
const twentyFourHoursButton = document.getElementById('24-hours-button')
const createButton = document.getElementById('create-button')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

let sixHoursButtonClicked = false
let twelveHoursButtonClicked = false
let twentyFourHoursButtonClicked = false


function sixHoursClicked(){

    twelveHoursButtonClicked = false
    twentyFourHoursButtonClicked = false
    sixHoursButtonClicked = true
    twelveHoursButton.style.backgroundColor = 'black'
    twelveHoursButton.style.color = 'white'
    twentyFourHoursButton.style.backgroundColor = 'black'
    twentyFourHoursButton.style.color = 'white'
    sixHoursButton.style.backgroundColor = 'white'
    sixHoursButton.style.color = 'black'
    console.log('hit')
}

function twelveHoursClicked(){
    twelveHoursButtonClicked = true
    twentyFourHoursButtonClicked = false
    sixHoursButtonClicked = false
    twentyFourHoursButton.style.backgroundColor = 'black'
    twentyFourHoursButton.style.color = 'white'
    sixHoursButton.style.backgroundColor = 'black'
    sixHoursButton.style.color = 'white'
    twelveHoursButton.style.color = 'black'
    twelveHoursButton.style.backgroundColor = 'white'
}

function twentyFourHoursClicked(){
    twelveHoursButtonClicked = false
    twentyFourHoursButtonClicked = true
    sixHoursButtonClicked = false
    twentyFourHoursButton.style.backgroundColor = 'white'
    twentyFourHoursButton.style.color = 'black'
    sixHoursButton.style.backgroundColor = 'black'
    sixHoursButton.style.color = 'white'
    twelveHoursButton.style.color = 'white'
    twelveHoursButton.style.backgroundColor = 'black'

}


function createPuzzle(){
    let body = {
        questionBox:questionBox.value,
        answerBox:answerBox.value,
        sixHours:sixHoursButtonClicked.value,
        twelveHours:twelveHoursButtonClicked.value,
        twentyFourHours:twentyFourHoursButtonClicked.value

    }
    axios.post('http://localhost:5777/puzzle'||`${baseURL}/puzzle`,body)
    .then((res)=>{

    })




}

sixHoursButton.addEventListener('click',sixHoursClicked)
twelveHoursButton.addEventListener('click',twelveHoursClicked)
twentyFourHoursButton.addEventListener('click',twentyFourHoursClicked)

createPuzzleButton.addEventListener('click',createPuzzle)




