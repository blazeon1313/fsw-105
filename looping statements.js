// Looping statements

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

// #1 Loop through the following array and log 
// to the console "old enough" if they are 18 or older,
// and "not old enough" if they aren't 18.

function isOldEnough(){
    for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("is old enough");
         }
        else{
            console.log("is not old enough");
        }
    }
}

console.log("number1");
console.log("-------");
isOldEnough();

// #2 Log to the console a personalized message 

function isOldEnoughTo(){
    for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road");
         }
        else{
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road");
        }
    }
}

console.log("-------");
console.log("number2");
console.log("-------");
isOldEnoughTo();

// #3 Check to see if the movie goer is a male
// or female for an even more personalized message.

function isOldEnoughGender(){    
    for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " he is old enough, let him in.");
          }
          
        else if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " she is old enough, let her in.");
        }

        else if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " he is not old enough, Do not let him in");
        }

        else{
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " she is not old enough, do not let her in.");
        }
}
}
console.log("-------");
console.log("number3");
console.log("-------");
isOldEnoughGender();

// #4 Create a for loop that iterates through 101 numbers (from 0 - 100). 
// If the current iteration is an Odd number, print "Odd" to the console, 
// otherwise print "Even".

function oddOrEven(){
    for(i = 0; i <101; i++){
        if(i % 2 === 0){
            console.log(i + " is even");
        }
        else{
            console.log(i + " is odd");
        }
    }
}

console.log("------");
console.log("Number 4");
console.log("-----");
oddOrEven();

// extra credit Imagine you have a button that toggles a light on and off. 
//Loop through the following array of numbers and toggle the button the numbers
// of times for each number. The array [2, 3, 2] would toggle the button 7 times.
