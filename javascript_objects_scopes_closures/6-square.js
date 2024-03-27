#!/usr/bin/node
const Squared = require('./5-square')

class Square extends Squared {

    constructor(size)
    {
        super(size)
    }

    charPrint(c)
    {
        if (c == undefined)
        {
            this.print()
        }
        else
        {
            for (let i=0; i<this.height; i++){
                for (let i=0; i<this.width; i++){
                    process.stdout.write(c)
                }
                console.log
            }
        }
    }

}

module.exports = Square