/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
/**
 *Accepts a string containing a name and returns a different Italian greeting based on daytime:
 *Buongiorno in the morning (until 13:00);
 *Buon Pomeriggio in the afternoon (until 17:00);
 *Buonasera in the evening (over 17:00)
 *@param {string} name The name to greet.
 *@returns {string} The greeting message.
 */
function daytimeGreetings(name) {
  const dayTime = new Date().getHours();
  let greet;
  if (dayTime < 13) greet = "Buongiorno";
  else if (dayTime < 17) greet = "Buon Pomeriggio";
  else greet = "Buonasera";
  return `${greet} ${name.trim()}`;
}

/**
 *Accepts a string containing a name and returns a different Italian greeting based on daytime:
 *Buongiorno in the morning (until 13:00);
 *Buon Pomeriggio in the afternoon (until 17:00);
 *Buonasera in the evening (over 17:00)
 *@param {string} name The name to greet.
 *@returns {string} The greeting message.
 */
const daytimeGreetings_AF = (name) => {
  const dayTime = new Date().getHours();
  let greet;
  if (dayTime < 13) greet = "Buongiorno";
  else if (dayTime < 17) greet = "Buon Pomeriggio";
  else greet = "Buonasera";
  return `${greet} ${name.trim()}`;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(daytimeGreetings(name));
console.log(daytimeGreetings_AF(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
