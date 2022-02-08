const createPuzzleButton = document.querySelector('#create-puzzle-button')
const logOutButton = document.getElementById('log-out')
const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'



function createPuzzle(){
    window.location.href = `${baseURL}/create-puzzle`
}
function logOut(){
    window.location.replace(`${baseURL}/`)
}


createPuzzleButton.addEventListener('click',createPuzzle)
logOutButton.addEventListener('click',logOut)
