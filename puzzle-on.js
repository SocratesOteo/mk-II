const question = document.getElementById('question')
const backButton = document.getElementById('back-button')
const questionParagraph = document.getElementById('question')
//const answerForm = document.getElementById('answer-form')
const answerEq = document.querySelector('#answer-box')
const submitButton = document.getElementById('submit-button')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

answer = []
timeLimit = []

function openPage(){
    axios.get(`http://localhost:5777/puzzle-on-req`    ||`${baseURL}/puzzle-on-req`)
    .then((req)=>{
        //console.log(req.data[0])
        data = req.data[0]
        console.log(data[0])
        answer.push(data[0].answer)
        
        let dataObj = {
            id: data[0].puzzle_id,
            question: data[0].question,
            answer: data[0].answer,
            sixHours: data[0].six_hours_value,
            twelveHours: data[0].twelve_hours_value,
            twentyFourHours: data[0].twenty_four_hours_value


        }
        questionParagraph.innerHTML = dataObj.question
        
    })
}
window.addEventListener('DOMContentLoaded',openPage)

function answerSubmit(){
    let answerSub = answer[0]
    console.log(answerSub)
    console.log(answerEq.value)
    if(answerSub === answerEq.value){
        console.log(answerEq)
        alert('Correct Answer')
    }
}



function back(){
    window.location.href = `${baseURL}/puzzles`
}



submitButton.addEventListener('click',answerSubmit)
backButton.addEventListener('click', back)

