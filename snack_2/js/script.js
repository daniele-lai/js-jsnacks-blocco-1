// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt("Inserisci una parola");
var parola2 = prompt("Inserisci un'altra parola");


if (parola1.length > parola2.length) {
  console.log(parola2);
  console.log(parola1);
} else if (parola1.length == parola2.length) {
  console.log("Le parole sono di uguale lunghezza");
} else {
  console.log(parola1);
  console.log(parola2);
}
