// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array
let lettersArary = Array.from(letters);

// Select Letters 
let letterContainer = document.querySelector(".letters");

// Letter Generate
lettersArary.forEach(letter => {
    let span = document.createElement("span");

    span.textContent = letter;

    // Add Class
    span.className = "letter-box";

    letterContainer.appendChild(span);
})

// Object Of Words + category

const words = {
    programming: ["php", "javascript", "css", "scala", "python"],
    movies: ["prestige", "inception", "parasite", "intersteller", "whiplash", "memento"],
    people: ["ameen", "mhmod", "malika", "ali"],
    countries: ["Egypt", "Yemen", "Ksa", "Qatar", "Syria"],
}

// Get Random Property
let allKeys = Object.keys(words);

let randomNumber = Math.floor(Math.random() * allKeys.length);

let randomName = allKeys[randomNumber];

let randomValue = words[randomName];

let randomValueNumber = Math.floor(Math.random() * randomValue.length);

let randomValueName = randomValue[randomValueNumber];

// Set category info
document.querySelector(".category span").innerHTML = `${randomName}`;

// Generate Letters
let lettersGuess = document.querySelector(".letters-guess");

// Convert choosn word to array
let letterAndSpace = Array.from(randomValueName); 

// Create Span depend on letters
letterAndSpace.forEach(letter => {
    // create span
    let span = document.createElement("span");

    if (letter === " ") {
        span.className = 'space';
    }

    // Append span to gues
    lettersGuess.appendChild(span);
});

// Guess Span
let guessSpan = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrong = 0;

// Select the draw element
let theDraw = document.querySelector(".hangman-draw");

// Handing Click
document.addEventListener('click', (e) => {
    // Set the status
    let theStatus = false;

    if (e.target.className === 'letter-box') {

        e.target.classList.add('clicked');

        // Get clicked letter
        let theLetterClick = e.target.innerHTML.toLowerCase();

        let choosen = Array.from(randomValueName.toLowerCase());

        choosen.forEach((wordLetter, wordIndex) => {

            
            if (theLetterClick == wordLetter) {
                theStatus = true;
            
                guessSpan.forEach((span, spanIndex) => {
                    if (wordIndex == spanIndex) {
                        span.innerHTML = theLetterClick;
                    }
                })
            }
        });

        if (theStatus !== true) {
            
            wrong++;
            // Add class wrong
            theDraw.classList.add(`wrong-${wrong}`);

            if (wrong >= 11) {

                let overLay = document.createElement('div');
                overLay.className = 'over-lay';

                let game = document.createElement('span');
                game.className = "game-over";
                game.textContent = 'Game Over';

                document.body.appendChild(overLay);
                document.body.appendChild(game);

                game.onclick = function() {
                    window.open('index.html', '_self');
                }
            }
        }

    }
});