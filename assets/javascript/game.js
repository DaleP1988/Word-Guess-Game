

var words = [

    "Bassie", 
    "Armstrong", 
    "Reinhardt", 
    "Ellington", 
    "Gershwin", 
    "Beiderbecke", 
    "Smith", 
    "Baker"

];

//click any key to get started

document.onkeyup = function ()
{ var userguess = String.fromCharCode(event.keyCode)|
    toLowerCase();

    console.log(userguess);
}

// start of game code

var word = words [Math.floor(Math.random() * words.length + 4)];

var answerArray = [];
for (var i = 0;i < word.length; i++){
    answerArray[i]="_";

console.log(answerArray);
}


//show player progress: update answer array and display

function remaining() {
var remainingletters = word.length;
while (remainingletters >  0);
var r = document.getElementById("left");
r.innerHTML = answerArray.join ("");
    
}


//wins

//guesses remaining

//letters already guessed

if(guess === null) {
    break;


} else {

}

for (var j = 0; j < word.length; j++){
    if (word[j] === guess){
    answerArray[j] = guess;
    remainingletters-- ;

    }
}

// display answer. THIS IS WRONG.

{
alert(answerArray.join ("");
alert("You Got it! The answer is" + word);

}

//need to make sure I am referencing the correct variables...

var html = "<p>CLICK ANY KEY TO GET STARTED!</p>" +
"<p>: " +  wins   + "</p>"  +
"<p>Current Word: " +  current   + "</p>"  +
"<p>Number of Guesses Remaining: " +  remaining  +   "</p>" +
"<p>Letters Already Guessed: " + guessed +  "</p>";

document.querySelector('#game').innerHTML = html;

//VARIABLES I STILL NEED:current word, guesses remaining, letters already guessed