#!/usr/bin/node
const Rectangle = require("./4-rectangle")

// inheriting from the class Rectangle
class Square extends Rectangle 
{
    // calling the constructor and super()
    constructor(size)
    {
        super(size, size)
    }
}
module.exports = Square;

