import newHttpRequest from './send_http_request';

//Get words
//function getWords(cb) {
     //cb(['aeorospaec', 'anomoly', 'airplane', 'ballistic', 'bologna', 'boasted', 'caldron', 'catastrophe']);
//}

//Use fetch API via send http request
async function getWords(cb) {
     try {
          cb(await newHttpRequest(
               'GET',
               'https://random-word-api.herokuapp.com/word?number=50'
          ));
     } catch(error) {
               alert(error.message);
     }
}

//Select a random word
//export default function getRandomWord(cb) {
// const randomWord = words[Math.floor(Math.random() * words.length)]
//cb(randomWord.toUpperCase());
//}

export default async function getRandomWord(cb) {
     try {
          await getWords(words => {
               const randomWord = words[Math.floor(Math.random() * words.length)];
               cb(randomWord.toUpperCase());
          })
     } catch(error) {
          alert(error);
     }
}
