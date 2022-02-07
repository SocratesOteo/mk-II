
const backButton = document.querySelector('#back-button')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

function backLink(){
    window.location.href = `${baseURL}/home ` || `http://localhost:5777/home`
}


backButton.addEventListener('click',backLink  )
