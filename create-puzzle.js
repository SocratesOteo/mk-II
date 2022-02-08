


const questionBox = document.querySelector('#question-box')
const answerBox = document.querySelector('#answer-box')
const sixHoursButton = document.getElementById('6-hours-button')
const twelveHoursButton = document.getElementById('12-hours-button')
const twentyFourHoursButton = document.getElementById('24-hours-button')
const createButton = document.getElementById('create-button')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

let sixHoursButtonClicked = 0
let twelveHoursButtonClicked = 0
let twentyFourHoursButtonClicked = 0


function sixHoursClicked(){

    twelveHoursButtonClicked = 0
    twentyFourHoursButtonClicked = 0
    sixHoursButtonClicked = 1
    twelveHoursButton.style.backgroundColor = 'black'
    twelveHoursButton.style.color = 'white'
    twentyFourHoursButton.style.backgroundColor = 'black'
    twentyFourHoursButton.style.color = 'white'
    sixHoursButton.style.backgroundColor = 'white'
    sixHoursButton.style.color = 'black'
    console.log('hit')
}

function twelveHoursClicked(){
    twelveHoursButtonClicked = 1
    twentyFourHoursButtonClicked = 0
    sixHoursButtonClicked = 0
    twentyFourHoursButton.style.backgroundColor = 'black'
    twentyFourHoursButton.style.color = 'white'
    sixHoursButton.style.backgroundColor = 'black'
    sixHoursButton.style.color = 'white'
    twelveHoursButton.style.color = 'black'
    twelveHoursButton.style.backgroundColor = 'white'
}

function twentyFourHoursClicked(){
    twelveHoursButtonClicked = 0
    twentyFourHoursButtonClicked = 1
    sixHoursButtonClicked = 0
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
        sixHours:sixHoursButtonClicked,
        twelveHours:twelveHoursButtonClicked,
        twentyFourHours:twentyFourHoursButtonClicked

    }
    axios.post('http://localhost:5777/puzzle'||`${baseURL}/puzzle`,body)
    .then((res)=>{
        console.log(res)
        window.location.href = `${baseURL}/master`
    })




}

sixHoursButton.addEventListener('click',sixHoursClicked)
twelveHoursButton.addEventListener('click',twelveHoursClicked)
twentyFourHoursButton.addEventListener('click',twentyFourHoursClicked)

createButton.addEventListener('click',createPuzzle)




