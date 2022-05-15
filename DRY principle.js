// Functions using DRY priciple

// #1 Write a function that accepts two numbers as parameters and 
// returns the sum.

function sum(a, b){

    var answer = a + b;

    return answer;
}
var num = sum(57,40)

console.log("Number 1");
console.log("------");
console.log("The sum of the two numbers is: " + num);

// # 2 Write a function that accepts three numbers as parameters
// and returns the largest of those numbers.

function largest(a,b,c){

    return Math.max(a,b,c);
}

var big = largest(5,7,22)



console.log("------");
console.log("number 2");
console.log("--------");
console.log(big + " is the largest number")

// #3 Write a function that accepts one number as a parameter
// and returns whether that number is even or odd.

function oddOrEven(n){

    if(n % 2 == 0){
        console.log(n + " is Even");
    }
    else{
        console.log(n + " is odd");
    }
    return n;
}

console.log("------");
console.log("number 3");
console.log("-------");
oddOrEven(12);

// #4 Write a function that accepts a string as a parameter.
// If the length of the string is less than or equal to twenty
// characters long, return the string concatenated with itself 
//(string + string). If the string is more than twenty characters long, 
//return the first half of the string.



function string(str){

    if(str.length <= 20){
        console.log(str + str);
    }
    else{
        console.log(str.slice(0, str.length /2));
    }
}

console.log("--------");
console.log("number 4");
console.log("-------")
string("Makes Sense!");

