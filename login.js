


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
            username:newUsername.value,
            email:email.value,
            password:newPassword.value  
            
        }
        console.log(body)
        //`${baseURL}/user`
        axios.post('http://localhost:5777/user' || `${baseURL}/user`, body)
        .then((res)=>{
            console.log('info sent over')
            console.log(res)
            console.log(res.data)
            console.log(res.data.length)
            console.log(res.data[0])
            //console.log(res.data[0].username)
          //  window.location.href = `${baseURL}/home`
          
            if (res.data.length > 0){
                if (res.data[0].username == newUsername.value){
                  alert('username is already in use')
                }else if (res.data[0].email == email.value){
                    alert('email is already in use')

              } else if (res.data.length <= 0){
                 alert(' new user has been added')
                window.location.href = `${baseURL}/home`


              }


          }
          
        })
        
    } else if (newPassword.value != confirmPassword.value){
        alert('Passwords Must Match')
    }

}

function handleLoginSubmit(e){
    e.preventDefault()
    if (username.value == 'twentyfiveplus1' && password.value == 'twentyfiveplus1'){
        window.location.href = `${baseURL}/master`

    }else{
        let body  = {
            username: username.value,
            password: password.value,
        }
    
        axios.post( ` http://localhost:5777/login` || `${baseURL}/login `, body)
        .then((res)=>{
            
            console.log(res)
            console.log(res.data)
            console.log(res.data[0])
            console.log(res.data[0].username)
            console.log ('it worked')
            
            if (res.data[0].username == username.value && res.data[0].password == password.value){
                window.location.href = `${baseURL}/home`
            } else if (res.data[0].username != username.value || res.data[0].password != password.value){
                alert('username or password is wrong')
            }
        })
    }

}

registerForm.addEventListener('submit',handleRegisterSubmit)
loginForm.addEventListener('submit', handleLoginSubmit)
