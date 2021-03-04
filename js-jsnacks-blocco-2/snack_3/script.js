// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.

var nomi =["marco ","mario ","luca "];

var cognomi = ["rossi ", "bianchi ", "verdi "];

var listaGatsby =[];

for (var i = 0; i < 3; i++) {
  var numeroCasuale = Math.floor(Math.random()*3);

  var nomeCasuale = nomi[numeroCasuale];

  var cognomeCasuale = cognomi[numeroCasuale];

  listaGatsby.push(nomeCasuale + cognomeCasuale);
}

console.log(listaGatsby);
