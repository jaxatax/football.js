// import consolePlusPlus
const consolePlusPlus = require('./consolePlusPlus.js');

/* This is how you use the input function:
var myString = consolePlusPlus.input("Enter User Input> ");

console.log(myString);
*/

console.log("Welcome to ZIRI'S Football Drill!")
console.log("Your very bad team is losing and you are on the 20 yard line.")
console.log("2 minutes are left on the clock to go 80 yards, score, and win the game.")
console.log(" ")

var yardLine = 20;
var down = 1;
var yardsToGo = 10;
var gameOver = false;

while (gameOver == false) {
    var playSelected = parseInt(consolePlusPlus.input("Enter 1 for Run Play, 2 for Pass Play"))
    var yardsGained = Math.floor(Math.random(1) * Math.floor(10));
    yardsToGo -= yardsGained
    yardLine += yardsGained
    if (yardsToGo <= 0) {
        down = 1;
        yardsToGo = 10;
        if (yardsGained == 1) {
            console.log("You gain " + yardsGained.toString() + " yard.");
        } else {
            console.log("You gain " + yardsGained.toString() + " yards.");
        }
    } else {
        down += 1
        // console.log("You gain " + yardsGained.toString() + " yards.");
        if (yardsGained == 1) {
            console.log("You gain " + yardsGained.toString() + " yard.");
        } else {
            console.log("You gain " + yardsGained.toString() + " yards.");
        }
    }
    
    if (yardLine >= 100) {
        console.log("Touchdown! You win! Go tell the other team to go die in a hole.");
        gameOver = true;
    } else if (yardLine < 100 && down > 4) {
        console.log("Turnover on downs. YOU LOSE SUCKER :(");
        gameOver = true;
    }
}

