// Escape room

// the goal is to make choices and escape the room!!

const readlineSync = require('readline-sync');

const playerName = readlineSync.question("What is your name? ");

var welcomeMessage = `Welcome ${playerName} to the Escape Room Game Simulation.`;
console.log(welcomeMessage);

var hasLife = true;
var hasKey = false;

// the Game

while(hasLife == true){

    var menuId = readlineSync.keyIn('enter 1 to put hand in hole, enter 2 to open the box, or, enter 3 to open door: ', {limit: `$<1-4>`}); 
  
        switch(menuId){

            case '1': 
                hasLife = false; 
                console.log(`${playerName} Oh NO!! you put your hand in a hole of POISON!! You have DIED!!`);
                console.log('GAME OVER!!!!!');

                break;                

            case '2':
                hasKey = true;
                console.log(`${playerName} you found the key inside the box.`);

                break;   

            case '3':
                switch(hasKey){

                    
                    case false:
                        console.log(`${playerName} You need to find the key first`);

                        break;

                    case true:
                        hasLife = false;
                        console.log(`${playerName} You opened the door.   Congratulations you have ESCAPED!!!`);
                        console.log('GAME OVER!!!!!');

                        break;
                }

                break;

            default:
                console.log("please try again");    
        }
}    
