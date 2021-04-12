//Set the wrong guesses
const MAX_WRONG_LETTERS = 10;

//Find all the letters
export function lettersRemaining(word, letters) {
     const wrongLetters = letters.filter((character) => !word.includes(character));
     return MAX_WRONG_LETTERS - wrongLetters.length;
}

//Are the letters guessed
export function isGameWon(word, letters) {
     return !word.split("").find(letter => !letters.includes(letter));
}

//If no letters and game not won, game over
export function isGameOver(word, letters) {
     return !lettersRemaining(word, letters) && !isGameWon(word, letters);
}

//Still in play
export function isStillPlaying(word, letters) {
     return (
          lettersRemaining(word, letters) &&
          !isGameOver(word, letters) &&
          !isGameWon(word, letters)
     );
}