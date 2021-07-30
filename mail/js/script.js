// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creo una lista di email 

var listaEmail = ["marcorossi@gmail.com" , "chiara_baggio@gmail.com", "luigi90@libero.it", "davidebianchi@hotmail.com", "gabriella7@yahoo.com"];

// chiedo all'utente di inserire la sua email 


var email = prompt("inserisci email");

// controllo che sia nella lista di chi può accedere
for (var i = 0; i < listaEmail.length; i++) {

    if (email == listaEmail[i]) {
        document.getElementById("auth").innerHTML = "Il tuo indirizzo email è registrato. Puoi accedere!"
        i = listaEmail.length;
    } else if (i == (listaEmail.length - 1)) {
        document.getElementById("not-auth").innerHTML = "Il tuo indirizzo email non è registrato. Non sei autorizzato ad accedere!"
    }
}
