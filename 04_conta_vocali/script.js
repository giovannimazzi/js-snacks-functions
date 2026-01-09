/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
/**
 *Accepts a string and returns the number of vowels contained in it.
 *@param {string} origWord The original word.
 *@returns {number} The number of vowels contained in the original word.
 */
function vowelsCount(origWord) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelsFound = [];
  for (let i = 0; i < origWord.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (origWord[i] === vowels[j]) {
        vowelsFound.push(origWord[i]);
      }
    }
  }
  return vowelsFound.length;
}

/**
 *Accepts a string and returns the number of vowels contained in it.
 *@param {string} origWord The original word.
 *@returns {number} The number of vowels contained in the original word.
 */
const vowelsCount_AF = (origWord) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelsFound = [];
  for (let i = 0; i < origWord.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (origWord[i] === vowels[j]) {
        vowelsFound.push(origWord[i]);
      }
    }
  }
  return vowelsFound.length;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsCount(word));
console.log(vowelsCount_AF(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
