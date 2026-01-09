/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/**
 *Accepts an array of strings (names) and returns an array containing the first char of each element.
 *@param {string[]} origNames The array containing original names.
 *@returns {string[]} The array containing the first char of each name.
 */
function fisrtChar(origNames) {
  const outputArray = [];
  for (let i = 0; i < origNames.length; i++) {
    outputArray.push(origNames[i][0]);
  }
  return outputArray;
}

/**
 *Accepts an array of strings (names) and returns an array containing the first char of each element.
 *@param {string[]} origNames The array containing original names.
 *@returns {string[]} The array containing the first char of each name.
 */
const fisrtChar_AF = (origNames) => {
  const outputArray = [];
  for (let i = 0; i < origNames.length; i++) {
    outputArray.push(origNames[i][0]);
  }
  return outputArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(fisrtChar(names));
console.log(fisrtChar_AF(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
