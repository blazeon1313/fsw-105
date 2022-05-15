// string methods

// #1 Make a function that will return any given string into all caps followed by the same string all lowercase.

function allcaps(str){

    return str.toUpperCase() + str.toLowerCase();
}

var base = "Homerun!";

console.log("number 1");
console.log("---------");
console.log(allcaps(base));                    

// #2 Make a function that returns a number half the length and rounded down.

function hlflength(num){

    return Math.floor(num.length / 2);
}

var sport = "basketball"

console.log("--------");
console.log("number 2");
console.log("-------");
console.log(hlflength(sport));

// #3 Make a function that uses slice() and the other functions
// you've written to return the first half of the string.

function wrd(strb){

    return strb.slice(0, strb.length / 2);

}

var hope = "hope this works now"

console.log("-------");
console.log("number 3");
console.log("-------");
console.log(wrd(hope));

// #4 Make a function that takes a string and returns that string where the first half is capitalized,
// and the second half is lower cased. (If the string length is odd, capitalize the shorter of the 
// first half.)

function boom(hlf){

    return hlf.slice(0 , hlf.length /2) .toUpperCase() + hlf.slice(hlf.length / 2, ) .toLowerCase();
}

var cat = "the cat is large!";

console.log("--------");
console.log("number 4");
console.log("--------");
console.log(boom(cat));


// Optional: Make a function that takes any string and capitalizes any character that follows a space.

function capitalize(wds){
    
    return wds.split(" ") .map((value) => value.slice(0,1) .toUpperCase() + value.slice (1)) .join(" ");
    
}

var dog = "the dog is wild";

console.log("--------");
console.log("optional");
console.log("--------");
console.log(capitalize (dog))