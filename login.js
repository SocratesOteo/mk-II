const registerForm = document.querySelector('#register-form')
const newUsername = document.querySelector('#new-username')
const email = document.querySelector('#registration-email')
const  newPassword = document.querySelector('#new-password')
const  confirmPassword = document.querySelector('#confirm-new-password')

function handleSubmit(e){
    let body = {
        name: newUsername.value,
        email: email.value,
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value
    }
    console.log(body)

}

registerForm.addEventListener('submit',handleSubmit)