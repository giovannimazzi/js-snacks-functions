/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
/**
 *Accepts a string containing a name and returns an Italian greeting.
 *@param {string} name The name to greet.
 *@returns {string} The greeting message.
 */
function greetings(name) {
  return `Ciao ${name.trim()}`;
}

/**
 *Accepts a string containing a name and returns an Italian greeting.
 *@param {string} name The name to greet.
 *@returns {string} The greeting message.
 */
const greetings_AF = (name) => `Ciao ${name.trim()}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(userName));
console.log(greetings_AF(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
