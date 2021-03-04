// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

var somma = 0;

for (var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt("Scegli un numero"));

  somma += numero;
}

console.log(somma);

var sommaWhile = 0;

var n = 1;
while (n <= 5) {
  var numeroWhile = parseInt(prompt("Scegli un numero"));
  sommaWhile += numeroWhile;
  n++;
}

console.log(sommaWhile);
