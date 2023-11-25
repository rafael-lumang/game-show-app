const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');


let missed = 0;

const mainContainer = document.querySelector('.main-container');
const startGame = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');

startGame.addEventListener('click', () => {
    mainContainer.removeChild(overlay)
})

const hints = [
    "hids nod hue wets may",
    "the row pack thirst hay",
    "aisle hike peg bus hike an hot done high",
    "son dane knived vote bowl",
    "hids fie fold logs hum aware",
]

const phrases = [
    "its not you its me",
    "throwback thursday",
    "i like big butts and i cannot lie",
    "sunday night football",
    "its 5 oclock somewhere"
]

// const characterList = [];

function getRandomPhraseAsArray(arr) {
    const phraseIndex = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[phraseIndex];
    return randomPhrase;
    // const splitPhrase = randomPhrase.split('');
    // return characterList.push(splitPhrase);
}

const randomPhrase = getRandomPhraseAsArray(phrases);
console.log(`This the new phrase: ${randomPhrase}`);
const phraseList = document.querySelector('#phrase ul');
console.log(`This is a phrase list : ${phraseList}`)

function addPhraseToDisplay(arr) {
    arr.split("").forEach((character) => {
        console.log(character);
        if (character === " ") {
            const li = document.createElement('li');
            li.innerHTML = `<li class="space">${character}</li>`;
            phraseList.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.innerHTML = `<li class="letter">${character}</li>`;
            phraseList.appendChild(li);
        }
    });
}

addPhraseToDisplay(randomPhrase);
const letters = document.querySelectorAll(".letter");


function checkLetter(guess) {
    console.log(guess);
    const matchedLetters = [];
    for (let letter of letters) {
        if (letter.textContent == guess.textContent) {
            console.log(`this is a letter: ${letter.textContent}`);
            letter.classList.add("show");
            matchedLetters.push(letter.textContent)
        }
    }
    if (matchedLetters.length > 0 ) {
        return matchedLetters
    } else {
    return null;
    }
};

const keyboard = document.querySelector("#qwerty")
console.log(`This is the keyboard: ${keyboard}`);

keyboard.addEventListener("click", (e) => {
    const clicked = e.target;
    if (clicked.tagName === "BUTTON") {
        clicked.classList.add('chosen');
        clicked.setAttribute("disabled", "true");
        const letterFound = checkLetter(clicked);
        if (letterFound === null) {
            const liveHearts = document.querySelectorAll(".tries img");
            liveHearts[missed].src = "images/lostHeart.png";
            missed += 1;
        }
    }
});

function checkWin () {
    const shown = document.querySelectorAll(".show");
    if (shown.length = letters.length) {
        overlay.className = "win";
        mainContainer.appendChild('overlay');
    }
}

// loop in check letter doesn't loop through all of the same letters that match guesed. 
// Work on Check Letter
// Work on Check Win
