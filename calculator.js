//calculator 

const readlineSync = require("readline-sync")

var num1 = readlineSync.questionInt("please enter a number ");
var num2 = readlineSync.questionInt("please enter a second number ");
var operator = readlineSync.question("please enter an operation (add, sub, mul, div): ");


// functions for the operator to use

// addition

function add(num1 , num2){
    return num1 + num2;
}

// subtraction

function sub(num1 , num2){
    return num1 - num2;
}

// multiplication

function mul(num1 , num2){
    return num1 * num2;
}

// division

function div(num1 , num2){
    return num1 / num2;
}

// switch statement for operator
function calculator(num1, num2, operator){

    switch(operator) {
        case "add": 
            return add(num1, num2);
    
        case "sub": 
            return sub(num1, num2);
    
        case "mul": 
            return mul(num1, num2);
          
        case "div": 
            return div(num1, num2);
    
        default:
            return "Invalid attepmt please try again";
  }
}
console.log("when you " + operator + " " + num1 + " and " + num2 + " the result is: " + calculator(num1,num2,operator));

