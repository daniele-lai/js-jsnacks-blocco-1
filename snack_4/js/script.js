// In un array sono contenuti i nomi degli invitati alla festa del
// grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa

var invitati = ["Mario", "Andrea", "Luca"];

var nome = prompt("Qual è il tuo nome?");

var dentro = false;

for (var i = 0; i < invitati.length; i++) {
  if (nome == invitati[i]) {
    dentro = true;
  }
}

if (dentro == true) {
  console.log("Sei dei nostri");
} else {
  console.log("Spiaze, sei fuori");
}
