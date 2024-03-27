// function that increments a functions

function add(number, theFunction){
    number = number + 1;
    theFunction(number);
}


module.exports.addMeMaybe = add
