


console.log('hello world')

const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')
const newUsername = document.querySelector('#new-username')
const email = document.querySelector('#registration-email')
const  newPassword = document.querySelector('#new-password')
const  confirmPassword = document.querySelector('#confirm-new-password')

const username = document.querySelector('#username')
const password = document.querySelector('#login-password')

const baseURL = 'https://treasure-hunt-testing.herokuapp.com' || 'http://localhost:5777'

function handleRegisterSubmit(e){
    e.preventDefault()
    if(newPassword.value == confirmPassword.value){
        let body = {
            username: newUsername.value,
            email: email.value,
            password: newPassword.value
                
            
        }
        console.log(body)
    
        axios.post(`${baseURL}/user` || 'http://localhost:5777/user', body)
        .then(()=>{
            console.log('info sent over')
            window.location.href = `${baseURL}/home`
        })
    } else if (newPassword.value != confirmPassword.value){
        alert('Passwords Must Match')
    }

}

function handleLoginSubmit(e){
    e.preventDefault()
    let body  = {
        username: username.value,
        password: password.value,
    }

    axios.post(`http://localhost:5777/login`, body)
    .then((res)=>{

        console.log ('it worked')
        if (res.bodyTrue === true){
            window.location.href = `http://localhost:5777/home`
        } else if (res.bodyTrue === false){
            alert('username or password is wrong')
        }
    })

}

registerForm.addEventListener('submit',handleRegisterSubmit)
loginForm.addEventListener('submit', handleLoginSubmit)
