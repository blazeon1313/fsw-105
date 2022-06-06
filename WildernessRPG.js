// Wilderness RPG

const readlineSync = require('readline-sync');

const playerName = readlineSync.question("\nPlease enter your name player:\n ");

var welcomeMessage = `\nWelcome ${playerName} to the Wilderness RPG. \nThe Year is 1985 How long will you Survive?`;
console.log(welcomeMessage);


const animals = ['Grizzly Bear', 'Black Panther', 'Grey Wolf'];
const loot = ['coins', 'food', 'leather'];
var prize = [];
let playerHp = 50;
const choice = ['walk', 'quit', 'print'];
let pickUp = loot[Math.floor(Math.random() * loot.length)];

function game(){ //the game
    
    const playerAP = Math.floor(Math.random() * (5 - 3 + 5) * 7);
    const animal = animals[Math.floor(Math.random() * animals.length)];
    let animalHp = 60;
    const animalAP = Math.floor(Math.random()* (5 - 2 + 6) * 5);

    const index = readlineSync.keyInSelect(choice, 'What is your next choice: ');

    switch(choice[index]){ //player choices
        
        case 'quit':
            playerHp = 0;   
            console.log(`${playerName} You did not survive!!!!`);
            console.log("\n-------Game Over-------");
            break;

        case 'print':

            console.log(`\nPlayer: ${playerName}` + "\nHP: " + playerHp);
            break;

        case 'walk': 

            let key = Math.random();

            if(key <= .25){
                console.log("\n..........Walking.........");
            }else if (key >= .25){
                console.log("You have encountered a: " + animal);
            
                while(playerHp > 0 && animalHp > 0){
                
                    const player = readlineSync.question('\nThe Choice is Yours:\n \nPress "a" to attack or Press "r" to run:\n');

                switch(player){ //enemy encounter
                    case 'r':
                        const run = Math.random();
                        if(run <= .5){
                            console.log("\nYou tried to Escape the attack but " + animal + " Attacked you with " + animalAP + " attack points" );  
                            break;

                        }else if(run >= .5){
                            console.log("\nYou Escaped " + animal + "'s attack!");
                            break;
                        }
                    
                    case "a":
                        animalHp -= playerAP;

                        console.log("\nYou Attacked " + animal + " with " + playerAP + " attack points.");

                        playerHp -= animalAP;

                        console.log('\n'+animal + " attacked you with " + animalAP + " attack points.");

                        if(animalHp <= 0){
                            console.log("\nYou defeated: " + animal + ".\n" + "\nYou looted: " + pickUp);
                                let loot = Math.random();
                                if(loot >= .3){ 
                                    prize.push(pickUp);
                                    break;
                                }
            
                        }else if( playerHp <= 0){
                            console.log("\n"+animal + " has defeated you in battle!!!");
                            console.log(`\n${playerName} your life has ended!!`);
                            console.log("\nGAME OVER!!!!!!");
                            break;
                        }  
            }           
            }

                        
        }
    }
}

while(playerHp > 0){
    userRestore = function(){
        playerActive = true
        playerHp = 50
    };
    userRestore();
    game();
}



