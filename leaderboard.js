const backButton = document.querySelector('#back-button')
const leaderBoard = document.getElementById('leaderboard-background')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

function backLink(){
    window.location.href = `${baseURL}/home ` || `http://localhost:5777/home`
}

function getUsers(){
    axios.get( `http://localhost:5777/get-leaderboard` || `${baseURL}/get-leaderboard`)
    .then((req)=>{
        data = req.data[0]
        //console.log(data[0].username)
        
        for (i = 0; i < data.length; i++){
            //console.log(data[i])
            if (data[i].username){
                let newDiv = document.createElement('div')
                newDiv.style.display = 'flex'
                newDiv.style.alignItems = 'center'
                newDiv.style.justifyContent = 'center'
                newDiv.style.borderWidth = '2%'
                newDiv.style.borderColor = 'grey'
                newDiv.style.borderStyle = 'solid'
                newDiv.style.background = 'black'
                newDiv.style.color = 'white'
                newDiv.style.fontFamily = 'W95FA'
                newDiv.style.width = '99.2%'
                newDiv.style.height = '30px'
                newDiv.innerHTML = data[i].username
                leaderBoard.appendChild(newDiv)
                
                
                
            }
        }
    
    })
    

}
window.addEventListener('DOMContentLoaded',getUsers)
backButton.addEventListener('click',backLink )
