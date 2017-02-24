
var wins = 0;
		var words = [
			"BATMAN",
			"SUPERGIRL",
			"SPIDER-MAN",
			"SUPERMAN",
			"HULK",
			"THOR",
			"DAREDEVIL",
			"AQUAMAN",
			"ANT-MAN",
			"GREEN ARROW",
			"THE FLASH",
			"JESSICA JONES",
			"CAPTAIN AMERICA",
			"BLACK WIDOW",
			"IRON MAN",
			"LUKE CAGE",
			"BLACK PANTHER",
			"DOCTOR STRANGE",
			"BLACK CANARY",
			"GREEN LANTERN",
			"WONDER WOMAN",
			"MARTIAN MANHUNTER"
		];

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
				if (currentWordArray[i] === " "){
					wordBlanks.push(" ")
				} else{
				wordBlanks.push("_ ");
				}
			}

			var wordBlanksAsString = wordBlanks.join(" ");
			document.getElementById("currentWord").textContent = wordBlanksAsString;
			document.getElementById("guessedLetters").textContent = '';
			document.getElementById("remainingGuesses").textContent = remainingGuesses;
		}

		start();

		document.onkeyup = function (event) {
			var userSelection = event.key.toUpperCase();
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
					document.getElementById("completedWord").textContent = currentWord;
					start();
				}

				if (wordBlanksAsString === "GREEN ARROW") {
					document.getElementById("image").src = "assets/images/arrow.jpg"

				}else if (wordBlanksAsString ==="THE FLASH") {
					document.getElementById("image").src = "assets/images/flash.jpg"

				}
				else if (wordBlanksAsString ==="BATMAN") {
					document.getElementById("image").src = "assets/images/batman.jpg"

				}else if (wordBlanksAsString ==="SUPERGIRL") {
					document.getElementById("image").src = "assets/images/supergirl.jpg"

				}else if (wordBlanksAsString ==="SPIDER-MAN") {
					document.getElementById("image").src = "assets/images/spider.jpeg"

				}else if (wordBlanksAsString ==="SUPERMAN") {
					document.getElementById("image").src = "assets/images/superman.jpg"

				}else if (wordBlanksAsString ==="HULK") {
					document.getElementById("image").src = "assets/images/hulk.jpg"

				}else if (wordBlanksAsString ==="THOR") {
					document.getElementById("image").src = "assets/images/thor.jpg"

				}else if (wordBlanksAsString ==="DAREDEVIL") {
					document.getElementById("image").src = "assets/images/daredevil.jpg"

				}else if (wordBlanksAsString ==="AQUAMAN") {
					document.getElementById("image").src = "assets/images/aquaman.jpg"

				}else if (wordBlanksAsString ==="ANT-MAN") {
					document.getElementById("image").src = "assets/images/antman.jpg"

				}else if (wordBlanksAsString ==="JESSICA JONES") {
					document.getElementById("image").src = "assets/images/jessica.jpeg"

				}else if (wordBlanksAsString ==="CAPTAIN AMERICA") {
					document.getElementById("image").src = "assets/images/captain.jpeg"

				}else if (wordBlanksAsString ==="BLACK WIDOW") {
					document.getElementById("image").src = "assets/images/widow.jpg"

				}else if (wordBlanksAsString ==="IRON MAN") {
					document.getElementById("image").src = "assets/images/ironman.jpg"

				}else if (wordBlanksAsString ==="LUKE CAGE") {
					document.getElementById("image").src = "assets/images/luke.jpeg"

				}else if (wordBlanksAsString ==="BLACK PANTHER") {
					document.getElementById("image").src = "assets/images/panther.jpeg"

				}else if (wordBlanksAsString ==="DOCTOR STRANGE") {
					document.getElementById("image").src = "assets/images/strange.jpg"

				}else if (wordBlanksAsString ==="BLACK CANARY") {
					document.getElementById("image").src = "assets/images/canary.jpeg"

				}else if (wordBlanksAsString ==="GREEN LANTERN") {
					document.getElementById("image").src = "assets/images/lantern.jpeg"

				}else if (wordBlanksAsString ==="WONDER WOMAN") {
					document.getElementById("image").src = "assets/images/wonder.jpeg"

				}else if (wordBlanksAsString ==="MARTIAN MANHUNTER") {
					document.getElementById("image").src = "assets/images/martian.jpg"

				}

				document.getElementById("score").textContent = wins;

				if (remainingGuesses === 0) {
					start();
				}
			}

		}
			