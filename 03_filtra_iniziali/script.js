/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 *Accepts an array of strings (names) and a one char string (initial), then returns an array containing only the elements which start with that char.
 *@param {string[]} origNames The array containing original names.
 *@param {string} initial The one char string (if there are more chars, only the first of them will be considered)
 *@returns {string[]} The array containing the names which start with the one char string.
 */
function fisrtCharFilter(origNames, initial) {
  const outputArray = [];
  for (let i = 0; i < origNames.length; i++) {
    if (origNames[i][0] === initial[0]) {
      outputArray.push(origNames[i]);
    }
  }
  return outputArray;
}

/**
 *Accepts an array of strings (names) and a one char string (initial), then returns an array containing only the elements which start with that char.
 *@param {string[]} origNames The array containing original names.
 *@param {string} initial The one char string (if there are more chars, only the first of them will be considered)
 *@returns {string[]} The array containing the names which start with the one char string.
 */
const fisrtCharFilter_AF = (origNames, initial) => {
  const outputArray = [];
  for (let i = 0; i < origNames.length; i++) {
    if (origNames[i][0] === initial[0]) {
      outputArray.push(origNames[i]);
    }
  }
  return outputArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(fisrtCharFilter(names, "A"));
console.log(fisrtCharFilter_AF(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
