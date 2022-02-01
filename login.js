console.log('hello world')
const registerForm = document.querySelector('#register-form')
const newUsername = document.querySelector('#new-username')
const email = document.querySelector('#registration-email')
const  newPassword = document.querySelector('#new-password')
const  confirmPassword = document.querySelector('#confirm-new-password')

function handleRegisterSubmit(e){
    e.preventDefault()
    if(newPassword.value == confirmPassword.value){
        let body = {
            username: newUsername.value,
            email: email.value,
            password: newPassword.value
                
            
        }
        console.log(body)
    
        axios.post('http://localhost:5777/user' || 'https://tec2-44-199-49-128.compute-1.amazonaws.com/user',body)
        .then(()=>{
            console.log('info sent over')
            window.location.assign('https://treasure-hunt-testing.herokuapp.com/home')
        })

        axios.get()

    } else if (newPassword.value != confirmPassword.value){
        
        alert('Passwords Must Match')
    }

}

registerForm.addEventListener('submit',handleRegisterSubmit)
