var globalVariable = Welcome

function outer(globalVariable){
    alert(globalVariable);
    let course = 'Holberton'

    function inner(){
        alert(globalVariable+course);
        exclamation = '!'

        function inception(){
            console.log(globalVariable+inner+exclamation);
        }
        inception()
    }
    inner()
}
outer()