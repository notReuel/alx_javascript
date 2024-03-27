var globalVariable = Welcome

function outer(globalVariable){
    console.log(globalVariable)

    var course = Holberton

    function inner(){
        console.log(course)
        outer()
    }
}

console.log(outer)