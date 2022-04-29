// If statement Olympics

// Preliminary

// #1 Write an if statement that prints "is greater than" if 5 is greater than 3.
if(5 > 3){
    console.log ("is greater than");
}
else{
    console.log("is NOT greater than");
}

// #2 if statement that prints "is the length" if the length of "cat" is 3.
var strpet = "cat";

if(strpet.length == 3){
    console.log("is the length");
}
else{
    console.log("is NOT th length");
}

// #3 Write an if/else statement that checks if the value "cat" 
// is equal to the value "dog" and print "not the same" 

var pet1 = "cat";
var pet2 = "dog";

if (pet1 == pet2){
    console.log("They are the same");
}
else{
    console.log("They are NOT the same");
}

// Bronze Medal

// #1 write an if statement that prints <theNameOfThePersonInObject> 
// is allowed to go to the movie if they are old enough (18 or older), 
// and,  <theNameOfThePersonInObject> is not allowed to go to the movie 
// if they are not older than 18.

var person = {
    firstName: "Bobby",
    age: 12
};

if(person.age > 18){
    console.log(person.firstName + " you are aloud");
}
else{
    console.log(person.firstName + " you are NOT aloud");
}

// #2 only allow them into the movie if their name starts with "B".

var person = {
    firstName: "Bobby",
    age: 12
};

if(person.firstName.charAt(0) == "B"){
    console.log(person.firstName + " you are aloud to enter")
}
else{
    console.log(person.firstName + " you are not aloud to enter")
}

// #3 only allow them into the movie if their name starts with "B"
// and they are older than 18
 
var person = {
    firstName: "Bobby",
    age: 12
};

if((person.firstName.charAt(0) == "B") && (person.age > 18)){
    console.log(person.firstName + " you are aloud")
}
else{
    console.log(person.firstName + " you are NOT aloud")
}

// Silver Medal

// #1 Write an if/else-if/else statement that prints "strict" if 1 strictly equals "1" , 
// prints "loose" or "abstract" if 1 equals "1" without type checking,
// and prints "not equal at all" if it doesn't print the other stuff.


if(1 === "1"){
    console.log("strict");
}
else if(1 == "1"){
    console.log("loose");
}
else{
    console.log("not equal at all");
}

// #2 Write an if statement that prints "yes" 
// if 1 is less than or equal to 2 AND (&&) 2 is equal to 4

if((1 <= 2) && (2 == 4)){
    console.log("yes");
}
else{
    console.log("no");
}

// Gold Medal

// #1 Pick at least one If statement from each: Preliminaries, 
// Bronze Medal, and Silver Medal section and replace it with a ternary operator.

//preliminary

console.log((5 > 3) ? "is greater then" : "is not greater than");

//Bronze

var person = {
    firstName: "Bobby",
    age: 12
};

console.log((person.firstName.charAt(0) == "B") ? 
(person.firstName + " you are aloud") : (person.firstName + " you are not aloud"));

//silver

console.log((1 <= 2) && (2 == 4)) ? "YES" : "NO";

// #2 Write an if statement that checks to see if "dog" is a string.

if (typeof "dog"){
    console.log ("is a string");
}
else{
    console.log("not a string");
}

// #3 Write an if statement that checks to see if "true" is a Boolean.

if (typeof true){
    console.log("is a boolean");
}
else{
    console.log("is not a boolean");
}

// #4 Write an if statement that checks to see if a variable has been defined or not

var w = 4

if(typeof w == 'undefined'){
    console.log ("Variable is defined");
}
else{
    console.log("Variable is undefined");
}

// #5 Write an if statement asking if "s" greater than 12 

if("s" > 12){
    console.log("s is greater than");
}
else{
    console.log("s is NOT greater than")
}

// #6 Try it with a few more letters and a few numbers.

if("k" > 12){
    console.log("K is greater than");
}
else{
    console.log("K is NOT greater than");
}

if("z" > 22){
    console.log("Z is greater than");
}
else{
    console.log("Z is NOT greater than");
}

if("a" > 2){
    console.log("a is greater than");
}
else{
    console.log("a is NOT greater than");
}

// #7 Write a ternary statement that uses console.log to display whether a number is odd or even. 

var myNumber = 10;

console.log(myNumber % 2 == 0) ? "even" : "odd"; 



