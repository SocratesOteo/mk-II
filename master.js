const createPuzzleButton = document.querySelector('#create-puzzle-button')
const logOutButton = document.getElementById('log-out')
const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'
const leaderBoard = document.getElementById('live-puzzles-div')


function createPuzzle(){
    window.location.href = `${baseURL}/create-puzzle`
}
function logOut(){
    window.location.replace(`${baseURL}/`)
}

function getPuzzles(){
    axios.get( `http://localhost:5777/get-pzzle` || `${baseURL}/get-pzzle`)
    .then((req)=>{
        data = req.data[0]
        //console.log(data[0].username)
        
        for (i = 0; i < data.length; i++){
            //console.log(data[i])
            if (data[i].puzzle_id){
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
                newDiv.innerHTML = data[i].puzzle_id
                leaderBoard.appendChild(newDiv)
                
                
                
            }
        }
    


    })
}


window.addEventListener('DOMContentLoaded',getPuzzles)
createPuzzleButton.addEventListener('click',createPuzzle)
logOutButton.addEventListener('click',logOut)
