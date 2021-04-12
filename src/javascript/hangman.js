import "regenerator-runtime/runtime";
//Bring in the modules to be used
import getRandomWord from './words_list';
import { isStillPlaying } from './game_status';
import letterSlots from './letter_slots';
import keyboard from './keyboard_layout';
import displayStatus from './game_display_status';
import restartGame from './new_game';

//Start and play the game
function drawGame(word, letters) {
     document.querySelector('#display-status').innerHTML = displayStatus(word, letters);
     document.querySelector('#letter-slots').innerHTML = letterSlots(word, letters);
     document.querySelector('#keyboard').innerHTML = keyboard(letters);
}

getRandomWord(word => {
     const letters = [];

     document.addEventListener('click', event => {
          if(isStillPlaying(word, letters) && event.target.tagName === 'BUTTON') {
               letters.push(event.target.dataset.character);
               drawGame(word, letters);
          }
     });
     drawGame(word, letters);
     restartGame();
})