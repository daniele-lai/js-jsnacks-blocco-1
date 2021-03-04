// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari

var numeri =[1, 2, 3, 4, 5, 6];

somma = 0;

for (var i = 0; i < numeri.length; i = i + 2) {

  somma += numeri[i];
}

console.log(somma);
