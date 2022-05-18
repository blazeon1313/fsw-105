// array methods

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Use only one function for all 10 questions

function arrayMethods(){

// # 1: Remove the last item from the vegetable array.
vegetables.pop();

// # 2: Remove the first item from the fruit array.
fruit.shift();

// # 3: Find the index orange.
var fruitIndex = fruit.indexOf("orange");

// # 4: Add that number to the end of the fruit array.
fruit.push(fruitIndex);

// # 5: Use the length property to find the length of the vegetable array.
var vegetablesIndex = vegetables.length;

// # 6: Add that number to the end of the vegetable array.
vegetables.push(vegetablesIndex);

// # 7: Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);

// # 8: Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);

// # 9: Reverse your array.
food.reverse();

// # 10: Turn the array into a string and return it.
food.join();
return food
};

console.log(arrayMethods());

