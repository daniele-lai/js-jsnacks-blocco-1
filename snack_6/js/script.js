// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var numero = parseInt(prompt("Inserisci un numero"));

var cubo = numero * numero;

for (var i = 0; i <= numero; i++) {
  cubo = i * i * i ;
  console.log(cubo);
}
