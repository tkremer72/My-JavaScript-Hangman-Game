//Bring everything from game_status in as status
import * as status from './game_status';

//invoke imported functions
function getMessage(word, letters) {
     if(status.isGameWon(word, letters)) {
          return "You Win!"
     } else if(status.isGameOver(word, letters)) {
          return "Game Over!"
     } else {
          return `Chances remaining: ${status.lettersRemaining(word, letters)}`
     }
}

//Export what to display 
export default function displayStatus(word, letters) {
     return `<div>${getMessage(word, letters)}</div>`
}