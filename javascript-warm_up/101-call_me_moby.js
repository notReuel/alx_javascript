// a function that multiplies

function mult (x, theFunction){
    for ( let i = 0; i < x; i++){
        theFunction();
    }
}

module.exports.callMeMoby = mult
