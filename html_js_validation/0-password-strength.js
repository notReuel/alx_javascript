var error = document.getElementById('error');

//FUNCTION TO VALIDATE PASSWORD AND REFUSE WRONG SUBMISSION
function validatePassword() {
    const password = document.getElementById('password').value;

    if (!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
        error.innerHTML = 'Password must contain atleast 1 lowercase, 1 uppercase, 1 number, 1 special character (e.g: !@#\$%\^&\*) and must be atleast 8 characters long';
        return false
    }

    error.innerHTML = 'password valid';
    return true

}
