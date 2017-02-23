
var wins = 0;
		var words = ["cat", "dog", "bird", "fox", "rabbit", "cow", "tiger","sheep"];

		var currentWord;
		var currentWordArray;
		var guessedLetters;
		var remainingGuesses;
		var wordBlanks;
	
		function start() {
			currentWord = words[Math.floor(Math.random() * words.length)];
			currentWordArray = currentWord.split("");
			 guessedLetters = [];
			 remainingGuesses = 15;
			 wordBlanks = [];
				
			for (var i = 0; i < currentWordArray.length; i++){
				wordBlanks.push("____ ");
			}

			var wordBlanksAsString = wordBlanks.join(" ");
			document.getElementById("currentWord").textContent = wordBlanksAsString;
			document.getElementById("guessedLetters").textContent = '';
			document.getElementById("remainingGuesses").textContent = remainingGuesses;
		}

		start();

		document.onkeyup = function (event) {
			var userSelection = event.key
			var index = guessedLetters.indexOf(userSelection)
			if (index === -1) {
				guessedLetters.push(userSelection)
				var guessedLettersAsString = guessedLetters.join(', ');
				document.getElementById("guessedLetters").textContent = guessedLettersAsString;
				
				remainingGuesses--;
				document.getElementById("remainingGuesses").textContent = remainingGuesses;

				for (var i = 0; i < wordBlanks.length; i++){
					if (currentWordArray[i] === userSelection){
						wordBlanks[i] = userSelection;
					} 
				}

				var wordBlanksAsString = wordBlanks.join("");
				document.getElementById("currentWord").textContent = wordBlanksAsString;

				if (wordBlanksAsString === currentWord) {
					wins++;
					//TODO: display winning word and picture etc.
					start();
				}

				document.getElementById("score").textContent = wins;

				if (remainingGuesses === 0) {
					start();
				}
			}

		}
			