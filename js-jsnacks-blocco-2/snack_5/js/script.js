// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var numero1 = [1,2,3,4,5];

var numero2 = [6,7,8,9];

do {
  var numeroRandom = Math.random();
  numero2.push(numeroRandom);
} while (numero2.length > numero1.length);


console.log(numero1);
console.log(numero2);
