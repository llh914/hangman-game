
var HEROES = {
	"GREEN ARROW": {
		image:"assets/images/arrow.jpg",
		music: "assets/music/arrow.mp3"
	},
	"BATMAN": {
		image:"assets/images/batman.jpg",
		music: "assets/music/batman.mp3"
	},
	"SUPERGIRL": {
		image: "assets/images/supergirl.jpg",
		music: "assets/music/supergirl.mp3",
	},
	"SPIDER-MAN": {
		image: "assets/images/spider.jpeg",
		music: "assets/music/spider.mp3",
	},
	"SUPERMAN": {
		image: "assets/images/superman.jpg",
		music: "assets/music/superman.mp3",
	},
	"HULK": {
		image: "assets/images/hulk.jpg",
		music: "assets/music/hulk.mp3",
	},
	"THOR": {
		image: "assets/images/thor.jpg",
		music: "assets/music/thor.mp3",
	},
	"DAREDEVIL": {
		image: "assets/images/daredevil.jpg",
		music: "assets/music/daredevil.mp3",
	},
	"AQUAMAN": {
		image: "assets/images/aquaman.jpg",
		music: "assets/music/aquaman.mp3",
	},
	"ANT-MAN": {
		image: "assets/images/antman.jpg",
		music: "assets/music/antman.mp3",
	},
	"THE FLASH": {
		image: "assets/images/flash.jpg",
		music: "assets/music/flash.mp3",
	},
	"JESSICA JONES": {
		image: "assets/images/jessica.jpeg",
		music: "assets/music/jessica.mp3",
	},
	"CAPTAIN AMERICA": {
		image: "assets/images/captain.jpeg",
		music: "assets/music/captain.mp3",
	},
	"BLACK WIDOW": {
		image: "assets/images/widow.jpg",
		music: "assets/music/widow.mp3",
	},
	"IRON MAN": {
		image:"assets/images/ironman.jpg",
		music: "assets/music/ironman.mp3"
	},
	"LUKE CAGE": {
		image: "assets/images/luke.jpeg",
		music: "assets/music/luke.mp3",
	},
	"BLACK PANTHER": {
		image: "assets/images/panther.jpeg",
		music: "assets/music/panther.mp3",
	},
	"DOCTOR STRANGE": {
		image: "assets/images/strange.jpg",
		music: "assets/music/strange.mp3",
	},
	"BLACK CANARY": {
		image: "assets/images/canary.jpeg",
		music: "assets/music/canary.mp3",
	},
	"GREEN LANTERN": {
		image: "assets/images/lantern.jpeg",
		music: "assets/music/lantern.mp3",
	},
	"WONDER WOMAN": {
		image: "assets/images/wonder.jpeg",
		music: "assets/music/wonder.mp3",
	},
	"MARTIAN MANHUNTER": {
		image: "assets/images/martian.jpg",
		music: "assets/music/martian.mp3"
	}
}

var wins = 0;
		var words = Object.keys(HEROES);
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
					wordBlanks.push("&nbsp;&nbsp;")
				} else{
				wordBlanks.push("_ ");
				}
			}

			var wordBlanksAsString = wordBlanks.join(" ");
			document.getElementById("currentWord").innerHTML = wordBlanksAsString;
			document.getElementById("guessedLetters").innerHTML = '';
			document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
		}

		start();

		document.onkeyup = function (event) {
			var userSelection = event.key.toUpperCase();
			var index = guessedLetters.indexOf(userSelection)
			if (index === -1) {
				guessedLetters.push(userSelection)
				var guessedLettersAsString = guessedLetters.join(', ');
				document.getElementById("guessedLetters").innerHTML = guessedLettersAsString;
				
				remainingGuesses--;
				document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

				for (var i = 0; i < wordBlanks.length; i++){
					if (currentWordArray[i] === userSelection){
						wordBlanks[i] = userSelection;
					} 
				}

				var wordBlanksAsString = wordBlanks.join("");
				document.getElementById("currentWord").innerHTML = wordBlanksAsString;

				if (wordBlanksAsString.replace('&nbsp;&nbsp;', ' ') === currentWord) {
					document.getElementById("image").src = HEROES[currentWord].image;
					var music = document.getElementById("music");
					music.src = HEROES[currentWord].music;
					music.load();
					wins++;
					document.getElementById("completedWord").innerHTML = currentWord;
					start();
				}

				document.getElementById("score").innerHTML = wins;

				if (remainingGuesses === 0) {
					start();
				}
			}

		}
			