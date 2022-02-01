console.log('hello world')
const registerForm = document.querySelector('#register-form')
const newUsername = document.querySelector('#new-username')
const email = document.querySelector('#registration-email')
const  newPassword = document.querySelector('#new-password')
const  confirmPassword = document.querySelector('#confirm-new-password')

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

registerForm.addEventListener('submit',handleRegisterSubmit)
