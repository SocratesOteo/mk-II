const createPuzzleButton = document.querySelector('#create-puzzle-button')
const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'



function createPuzzle(){
    window.location.href = `${baseURL}/create-puzzle`
}

createPuzzleButton.addEventListener('click',createPuzzle)

