/* Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome - cognome - età */
var studenteX = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 24,
}

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studenteX) {
    document.getElementById("lista").insertAdjacentHTML("beforebegin", (`<b>${key.charAt(0).toUpperCase() + key.slice(1)}:</b> ${studenteX[key]}<br>`));
}



//Creare un array di oggetti di studenti.
var lista_studenti = [
    {
        nome: "Luigi",
        cognome: "Rossi",
        eta: 25,
    },
    {
        nome: "Antonio",
        cognome: "Bianchi",
        eta: 19,
    },
    {
        nome: "Piero",
        cognome: "Verdi",
        eta: 22,
    }

]


//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < lista_studenti.length; i++) {
    console.log(lista_studenti[i]);
    var studente = lista_studenti[i];
    document.getElementById("registro").insertAdjacentHTML("beforebegin", `<p id="p${i}"></p><hr>`)
    for (var key in studente) {
        document.getElementById(`p${i}`).insertAdjacentHTML("afterbegin", `<b>${key.charAt(0).toUpperCase() + key.slice(1)}:</b> ${studente[key]}<br>`);
    }
}
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto
//studente inserendo nell’ordine: nome, cognome e età.