
        var remainingWrong = 5;
        var wins = 0;
        var lastResult = null;
        var word;
        var correctWord;
        var answerArray;
        var update;
        var lettersGuessed;
        var words = [

            "Basie",
            "Armstrong",
            "Reinhardt",
            "Ellington",
            "Gershwin",
            "Beiderbecke",
            "Smith",
            "Baker"

        ];
        $(document).ready(function () {




            //click any key to get started

            document.onkeyup = function () {
                var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

                checkGuess(userGuess);

            }

            function checkGuess(guess) {
                var found = false;
                for (var j = 0; j < correctWord.length; j++) {
                    if (correctWord[j].toLowerCase() === guess) {
                        answerArray[j] = guess;
                        correctWord = replaceAt(correctWord, j, " ");
                        found = true;
                        break;

                    }


                }

                if (!found) {
                    lettersGuessed.push(guess);
                    remainingWrong--;

                    if (remainingWrong == 0) {

                        lastResult = false;

                    }


                } else {
                    if (correctWord.trim() == "") {

                        wins++;
                        lastResult = true;

                    }

                }

                update();

            }


            var replaceAt = function (text, index, replacement) {
                return text.substr(0, index) + replacement + text.substr(index + replacement.length);
            }


            // start of game code





            update = function () {
                var html = "<p>";
                for (var i = 0; i < answerArray.length; i++) {
                    html += answerArray[i] + "  ";

                    //console.log(answerArray);
                }

                html += "</p>";
                if (lastResult != null) {
                    var result = lastResult ? "win" : "lose";

                    html += "<p> you " + result + "!</p>";
                    
                   
                    $("#newGame").show();

                }else{


                    html += "<p> remaining guesses:" + remainingWrong + "</p>";
                    html += "<p> letters guessed:" + lettersGuessed.toString() +  "</p>";

                }


                html += "<p> you have " + wins + " wins  </p>";


                $('#game').html(html);


            };

            newGameBtnClick( );




            /*if(guess === null) { 
            
            
            
            
            } */




            //alert(answerArray.join (""));
            function showSuccess() {

                alert("You Got it! The answer is" + word);

            }

            //need to make sure I am referencing the correct variables...

            /*var html = "<p>CLICK ANY KEY TO GET STARTED!</p>" +
            "<p>wins: " +  wins   + "</p>"  +
            "<p>current word: " +  current   + "</p>"  +
            "<p>number of guesses remaining: " +  remaining  +   "</p>" +
            "<p>letters already guessed: " + guessed +  "</p>";
            
            document.querySelector('#game').innerHTML = html; */

            //VARIABLES I STILL NEED:current word, guesses remaining, letters already guessed


        });

        function newGameBtnClick() {
            remainingWrong = 5;
            word = words[Math.floor(Math.random() * words.length)];
            correctWord = word;
            lettersGuessed = [];
            answerArray = [];
            for (var i = 0; i < word.length; i++) {
                answerArray[i] = "_";




            }
            lastResult = null;

            update();

            $("#newGame").hide();

           
        }
