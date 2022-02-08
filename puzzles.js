
const backButton = document.querySelector('#back-button')


const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

function backLink(){
    window.location.href = `${baseURL}/home ` || `http://localhost:5777/home`
}

function getPuzzle(){
    axios.get('http://localhost:5777/get-puzzles'|| `${baseURL}/get-puzzles`).
    then((res)=>{
        console.log(res)
    })
}


backButton.addEventListener('click',backLink )
window.addEventListener('DOMContentLoaded',getPuzzle)