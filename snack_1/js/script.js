// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var numeroPrimo = parseInt(prompt("Inserisci un numero"));
var numeroSecondo = parseInt(prompt("Inserisci un altro numero"));

if (numeroPrimo > numeroSecondo) {
  console.log(numeroPrimo);
} else if (numeroPrimo == numeroSecondo) {
  console.log("I numeri sono pari");
} else {
  console.log(numeroSecondo);
}
