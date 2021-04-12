//Create an http request 
export default function newHttpRequest(method, url, data) {
     return fetch(url, {
          method: method,
          body: data
     }).then(response => {
          if(response.status >= 200 && response.status < 300) {
               return response.json();
          } else {
               return response.json().then(errorData => {
                    console.log(errorData);
                    throw new Error('Something went wrong server-side! Please try again later.')
               })
          }
     }).catch(error => {
          console.log(error);
          throw new Error('Something went wrong, please try again later.')
     })
}