var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');

// creating the validatePassword function
function validatePassword() {
    const userPassword = document.getElementById('password').value;

    if (userPassword == 0){
        passwordError.innerHTML = 'Password cannot be empty'
        return false
    }
    if (!userPassword.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
        submitError.innerHTML = 'Password must be atleast 8 characters long and contain atleast 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character (e.g., !@#$%^&*).'
        return false;
    }

        passwordError.innerHTML = '';
        submitError.innerHTML = 'Strong Password';
        return true;
}

//VALIDATE FORM TO ALLOW SUBBMIT
// function validateForm(){
    // if (!validatePassword){
    //     submitError.innerHTML = 'fix password';
    //     return false;
    // }

// }
