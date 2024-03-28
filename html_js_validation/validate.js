var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');

function validatePassword() {
    var userPassword = document.getElementById('password').value;

    if (userPassword.length == 0){
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if (!userPassword.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
        passwordError.innerHTML = 'Password has to contain +++=';
        return false;
    }
    passwordError.innerHTML = 'valid';
    return true;
}
















// let submitError = document.getElementById('error')

// function validatePassword() {
//     var userPwd = document.getElementById('password');
    
//     if (userPwd.length == 0 ){
//         submitError.innerHTML = 'password cannot be blank.'
//         return false;
//     } 

//     if (userPwd.length < 8){
//         submitError.innerHTML = 'password cannot be less than 8 characters'
//         return false;
//     }

//     if (!userPwd.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
//         submitError.innerHTML = 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)';
//         return false;
//     }

//     submitError.innerHTML = 'okay'
// }