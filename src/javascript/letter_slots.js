//Create spans that are empty or contain a letter
function letterSlot(letter, letters) {
     if(letters.includes(letter)) {
          return `<span>${letter}</span>`
     } else {
          return `<span>&nbsp;</span>`
     }
}

//Export function for use
export default function letterSlots(word, letters) {
     const slots = word.split("").map(letter => letterSlot(letter, letters));
     return `<div>${slots.join('')}</div>`
}