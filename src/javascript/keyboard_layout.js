//Store the letters
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

//Divide the letters into three rows
const row1 = alphabet.slice(0, 10);
const row2 = alphabet.slice(10, 19);
const row3 = alphabet.slice(19, 26);

//Show or hide the buttons
function key(letter, letters) {
     if(letters.includes(letter)) {
          return `<span>${letter}</span>`
     } else {
          return `<button data-character=${letter}>${letter}</button>`
     }
}

//Export the keyboard and map letters to buttons
export default function keyboard(letters) {
     return `
     <div>${row1.map(character => key(character, letters)).join('')}</div>
     <div>${row2.map(character => key(character, letters)).join('')}</div>
     <div>${row3.map(character => key(character, letters)).join('')}</div>
     `
}