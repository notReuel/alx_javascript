// a script for a rectangle class
class Rectangle {

    constructor (w,h){

        if (w <= 0 || h<= 0 || h === undefined || w === undefined )
        {
            return
        }

        this.width = w
        this.height = h
    }

    print() {
        for (let i=0; i<this.height; i++){
            for(let i=0; i<this.width; i++){
                process.stdout.write("X")
            }
            console.log()
        }
    }
}

class Square(Rectangle) {
    constructor(size){
        super()
    }
}
module.exports=Rectangle;
